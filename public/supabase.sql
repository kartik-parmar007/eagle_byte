-- ============================================================
-- Eagle Byte — Supabase schema for the Contact page  (v2)
-- Run this in: Supabase Dashboard → SQL Editor → New query
-- Project: https://vhzcpbidtnecoqzowhtd.supabase.co
--
-- Safe to re-run. If you already created the v1 table
-- (with a project_type column), this migrates it in place
-- without losing any rows.
-- ============================================================

-- 1) Table (fresh installs; skipped if it already exists)
create table if not exists public.contact_messages (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null,
  email         text not null,
  phone         text not null,
  company       text,
  project_title text not null,
  budget        text not null,
  message       text not null
);

-- 2) Migrate v1 -> v2: rename project_type to project_title if present
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name   = 'contact_messages'
      and column_name  = 'project_type'
  ) then
    alter table public.contact_messages
      rename column project_type to project_title;
  end if;
end $$;

-- 3) Validation constraints — mirror the website form exactly:
--    name  : 2–80 chars          email : 5–120 chars
--    phone : exactly 10 digits   title : 3–120 chars
--    budget: one of 5 ranges     message: 100–2000 chars
alter table public.contact_messages
  drop constraint if exists contact_messages_name_check,
  drop constraint if exists contact_messages_email_check,
  drop constraint if exists contact_messages_phone_check,
  drop constraint if exists contact_messages_company_check,
  drop constraint if exists contact_messages_project_type_check,
  drop constraint if exists contact_messages_project_title_check,
  drop constraint if exists contact_messages_budget_check,
  drop constraint if exists contact_messages_message_check;

alter table public.contact_messages
  add constraint contact_messages_name_check
    check (char_length(name) between 2 and 80),
  add constraint contact_messages_email_check
    check (char_length(email) between 5 and 120 and position('@' in email) > 1),
  add constraint contact_messages_phone_check
    check (phone ~ '^[0-9]{10}$'),
  add constraint contact_messages_company_check
    check (company is null or char_length(company) <= 120),
  add constraint contact_messages_project_title_check
    check (char_length(project_title) between 3 and 120),
  add constraint contact_messages_budget_check
    check (budget in ('Under ₹10K', '₹10K – ₹30K', '₹30K – ₹75K', '₹75K – ₹100K', '₹100K+')),
  add constraint contact_messages_message_check
    check (char_length(message) between 100 and 2000);

-- 4) Row Level Security: the public (anon) role may ONLY insert.
--    With no select/update/delete policies, submissions cannot be
--    read back or tampered with using the publishable key.
alter table public.contact_messages enable row level security;

drop policy if exists "Public can submit contact messages" on public.contact_messages;
create policy "Public can submit contact messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- 5) Helpful index for reviewing submissions newest-first
create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);
