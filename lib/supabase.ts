// Minimal Supabase REST client — a plain fetch to PostgREST.
// The full @supabase/supabase-js SDK (~30KB gz) isn't worth it for a
// single write-only insert; RLS only allows `anon` to INSERT.

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export type ContactMessage = {
  name: string;
  email: string;
  /** digits only, exactly 10 */
  phone: string;
  company: string | null;
  project_title: string;
  budget: string;
  message: string;
};

export async function insertContactMessage(row: ContactMessage) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Supabase environment variables are not configured");
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    throw new Error(`Supabase insert failed (${res.status})`);
  }
}
