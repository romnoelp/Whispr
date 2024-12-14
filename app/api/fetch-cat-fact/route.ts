import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json(); // Assuming the response returns JSON
    return NextResponse.json({ message: data.fact }); // Using 'message' instead of 'fact'
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};
