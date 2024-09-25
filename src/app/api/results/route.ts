import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  let res = await supabase
    .from("blinkathon_results")
    .select("name,telegram,blink,github,tracks");

  console.log(res);
  return NextResponse.json(res);
}

// ensures cors
export const OPTIONS = GET;
