"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export default async function signInWithGoogle() {
  const origin = (await headers()).get("origin");
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });
  if (error) {
    console.error(error);
    return;
  }
  if (data?.url) {
    return redirect(data.url);
  }
}
