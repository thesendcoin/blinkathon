import { NextRequest, NextResponse } from "next/server";
import {
  Transaction,
  PublicKey,
  SystemProgram,
  Connection,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import {
  ACTIONS_CORS_HEADERS,
  createPostResponse,
  ActionGetResponse,
} from "@solana/actions";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  let response: ActionGetResponse = {
    type: "action",
    icon: "https://www.blinkathon.fun/banner.jpeg",
    title: "Submit your Blinks",
    description: "Online Blinks hackathon submission portal",
    label: "Submit!",
    links: {
      actions: [
        {
          label: "Submit!", // button text
          href: "/api/submit?name={name}&telegramId={telegramId}&blinkurl={blinkurl}&githubUrl={githubUrl}&hasTeam={hasTeam}&tracks={tracks}", // form action
          parameters: [
            {
              name: "name", // field name
              label: "Enter your name",
            },
            { name: "telegramId", label: "Telegram username" },
            {
              name: "blinkurl",
              type: "url",
              label: "Blink URL - Enter Actual path (domain/xyz)",
            },
            {
              name: "githubUrl",
              type: "url",
              label: "Github URL - Enter project Github URL",
            },
            {
              name: "hasTeam",
              label: "Do you have a team?",
              type: "select",
              options: [
                {
                  label: "Yes",
                  value: "yes",
                },
                {
                  label: "No",
                  value: "no",
                },
              ],
            },
            {
              type: "checkbox",
              name: "tracks",
              label: "Select all the Tracks, you want to participate in",
              required: true,
              options: [
                {
                  label: "SEND Integrations",
                  value: "send",
                },
                {
                  label: "Smart Account and Multi-Sig - Squads",
                  value: "squads",
                },
                {
                  label: "Digital Asset - Metaplex",
                  value: "metaplex",
                },
                {
                  label: "All Domains",
                  value: "allDomains",
                },
                {
                  label: "DeFi Blinks - Carrot",
                  value: "carrot",
                },
                {
                  label: "Kamino Integrations",
                  value: "kamino",
                },
                {
                  label: "NFT Trading - Tensor",
                  value: "tensor",
                },
              ],
            },
          ],
        },
      ],
    },
  };

  return NextResponse.json(response, {
    headers: ACTIONS_CORS_HEADERS,
  });
}

// ensures cors
export const OPTIONS = GET;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { account: string };

    const { searchParams } = new URL(req.url);

    //name={name}&telegramId={telegramId}&blinkurl={blinkurl}&githubUrl={githubUrl}&hasTeam={hasTeam}&tracks={tracks}", // form action

    let paramName = searchParams.get("name");
    let paramTelegramId = searchParams.get("telegramId");
    let paramBlinkurl = searchParams.get("blinkurl");
    let paramGithubUrl = searchParams.get("githubUrl");
    let paramHasTeam = searchParams.get("hasTeam");
    let paramTracks = searchParams.get("tracks");

    if (
      !paramName ||
      !paramTelegramId ||
      !paramBlinkurl ||
      !paramGithubUrl ||
      !paramHasTeam ||
      !paramTracks
    ) {
      return new Response("Missing required fields", {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      });
    }

    console.log("To be stored in DB");
    console.log(
      paramName,
      paramTelegramId,
      paramBlinkurl,
      paramGithubUrl,
      paramHasTeam,
      paramTracks
    );

    const connection = new Connection(
      clusterApiUrl("mainnet-beta"),
      "confirmed"
    );

    const sender = new PublicKey(body.account);

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    console.log("Inserting into DB");

    // let res = await supabase.from("blinkathon").insert([
    //   {
    //     name,
    //     has_team: hasTeam,
    //     has_build_blinks: hasBuildBlinks,
    //   },
    // ]);

    // console.log(res);

    console.log("Inserted into DB");

    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: sender,
        toPubkey: new PublicKey("ChAdkZB7uJE9Hd6QMCG9W93vf9fyCPFpzCDmmMx3A2Zf"),
        lamports: LAMPORTS_PER_SOL * 0,
      })
    );

    tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    tx.feePayer = sender;

    const payload = await createPostResponse({
      fields: {
        // links: {
        //   next: {
        //     type: "inline",
        //     action: {
        //       type: "completed",
        //       error: {
        //         message: "Scan the QR code to join the Blinkaton Telegram group",
        //       },
        //       icon: "https://i.imgur.com/LxmZ65g.jpeg",
        //       description: "You have successfully registered for the Blinkaton",
        //       label: "Registration Successful",
        //       title: "Blinkaton",
        //     },
        //   },
        // },
        transaction: tx,
        message: "Results will be live here : https://blinkathon.fun",
      },
    });

    return NextResponse.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    console.log("Error in POST /api/action/%5Busername%5D", err);
    let message = "An unknown error occurred";
    if (typeof err == "string") message = err;
    return new Response(message, {
      status: 400,
      headers: ACTIONS_CORS_HEADERS,
    });
  }
}
