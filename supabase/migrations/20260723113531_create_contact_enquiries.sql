/*
# Create contact_enquiries table (single-tenant, no auth)

1. Purpose
   Stores enquiry submissions from the Protec Security & Logistics website
   contact form. No user accounts are involved — any site visitor can submit.

2. New Tables
   - `contact_enquiries`
     - `id` (uuid, primary key, default gen_random_uuid())
     - `name` (text, not null) — submitter's full name
     - `email` (text, not null) — submitter's email address
     - `phone` (text, not null) — submitter's phone number
     - `company` (text, nullable) — optional organization name
     - `service` (text, not null) — requested service category
     - `message` (text, nullable) — optional message body
     - `created_at` (timestamptz, default now())

3. Security
   - Enable RLS on `contact_enquiries`.
   - Allow anon + authenticated INSERT (public contact form).
   - No SELECT/UPDATE/DELETE for anon or authenticated — enquiries are
     managed server-side only. This prevents public reads of submissions
     while still letting the form save new entries.
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  service text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON contact_enquiries;
CREATE POLICY "anon_insert_enquiries" ON contact_enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);
