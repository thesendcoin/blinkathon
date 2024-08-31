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
          href: "/api/form?name={name}&telegramId={telegramId}&blinkurl={blinkurl}&githubUrl={githubUrl}&tracks={tracks}", // form action
          parameters: [
            {
              name: "name", // field name
              label: "Enter your name",
            },
            { name: "telegramId", label: "Telegram username" },
            {
              name: "blinkurl", // field name
              label: "Blink URL - Enter Actual path (domain/xyz)",
            },
            {
              name: "githubUrl", // field name
              label: "Github URL - Enter project Github URL",
            },
            {
              name: "tracks", // field name
              label: "Tracks - Enter , seperated if more than 1",
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

    let name = searchParams.get("name");
    let hasTeam = searchParams.get("hasTeam");
    let hasBuildBlinks = searchParams.get("hasBuildBlinks");

    if (!name || !hasTeam || !hasBuildBlinks) {
      return new Response("Missing required fields", {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      });
    }

    if (hasTeam.toLowerCase() !== "yes" && hasTeam.toLowerCase() !== "no") {
      return new Response("Please make sure to reply only yes or no", {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      });
    }

    if (
      hasBuildBlinks.toLowerCase() !== "yes" &&
      hasBuildBlinks.toLowerCase() !== "no"
    ) {
      return new Response("Please make sure to reply only yes or no", {
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

    console.log("Inserting into DB");

    let res = await supabase.from("blinkathon").insert([
      {
        name,
        has_team: hasTeam,
        has_build_blinks: hasBuildBlinks,
      },
    ]);

    console.log(res);

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
        message: "Join here https://blinkathon.fun",
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
