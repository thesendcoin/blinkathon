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
          href: "/api/submit?name={name}&telegramId={telegramId}&blinkurl={blinkurl}&githubUrl={githubUrl}&tracks={tracks}&pitch={pitch}", // form action
          parameters: [
            {
              name: "name", // field name
              label: "Enter your name",
              required: true,
            },
            { name: "telegramId", label: "Telegram username", required: true },
            {
              name: "blinkurl",
              type: "url",
              label: "Blink URL - Enter Actual path (domain/xyz)",
              required: true,
            },
            {
              name: "githubUrl",
              type: "url",
              label: "Github URL - Enter project Github URL",
              required: true,
            },
            {
              name: "pitch",
              type: "url",
              label: "Pitch Deck URL - a public url to your pitch deck",
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
                  label: "Most Popular Blink - Blinkinsights",
                  value: "blinkisights",
                },
                {
                  label: "Most Engaging Blink - Bags",
                  value: "bags",
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
    let paramTracks = searchParams.get("tracks");
    let paramPitch = searchParams.get("pitch");

    if (
      !paramName ||
      !paramTelegramId ||
      !paramBlinkurl ||
      !paramGithubUrl ||
      !paramPitch ||
      !paramTracks
    ) {
      return new NextResponse("Missing required fields", {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      });
    }

    const connection = new Connection(
      clusterApiUrl("mainnet-beta"),
      "confirmed"
    );

    const sender = new PublicKey(body.account);

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    let res = await supabase.from("blinkathon_results").insert([
      {
        name: paramName,
        telegram: paramTelegramId,
        blink: paramBlinkurl,
        github: paramGithubUrl,
        pitch: paramPitch,
        tracks: paramTracks.split(","),
        address : body.account
      },
    ]);

    if (res.error) {
      console.log("Error in inserting data to supabase", res.error);
      return NextResponse.json(
        {
          message: "Blink already submittedm, for any queries contact @blinkathon",
        },
        {
          status: 400,
          headers: ACTIONS_CORS_HEADERS,
        }
      );
    }

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
        transaction: tx,
        message: "Wallah ! Results will be live soon : https://blinkathon.fun",
      },
    });

    return NextResponse.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    console.log("Error in POST /api/action/%5Busername%5D", err);
    let message = "An unknown error occurred, please try again or contact at @blinkathon"; 
    if (typeof err == "string") message = err;
    return NextResponse.json(
      {
        message,
      },
      {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      }
    );
  }
}
