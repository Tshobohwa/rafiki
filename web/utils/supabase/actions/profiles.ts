import { createSupabaseClient } from "../client";

export async function getProfile() {
  const supabase = createSupabaseClient();
  const profile = await supabase.from("profiles").select();
  console.log("profile", profile);
  return profile;
}
