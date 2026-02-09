import { supabase } from "./supabase.js";

export async function requireAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) window.location.href = "/account.html";
  return session;
}

export async function redirectIfAuthed() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) window.location.href = "/profile.html";
  return session;
}
