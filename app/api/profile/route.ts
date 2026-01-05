import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  const res = await fetch(
    `https://api.neynar.com/v2/farcaster/user/by_username?username=${username}`,
    {
      headers: {
        accept: "application/json",
        api_key: process.env.NEYNAR_API_KEY!,
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data.user);
}
