# Outbound recovery playbook

## Current diagnosis

FreeVibe has useful lead data, but it must not be treated as a ready-to-send list.

Observed locally on 2026-06-22:

- `data/leads.db` contains 4,311 leads.
- 2,913 are marked actionable (`contact_now` or `warm_contact`).
- 287 are marked `contact_now`.
- 400 have already been marked as contacted.
- The dominant hot signal is `hasTel = 0` / "no clickable phone" style friction.
- Some previous outreach mixed languages and made technical claims that were not always true.

The old failure mode was not just copy. It was a pipeline problem:

1. List quality was not strict enough.
2. Claims were sent before manual or code-level verification.
3. Language routing was not reliable enough.
4. Sending volume likely damaged Gmail reputation.

## Hard rule

No claim goes into an email unless it is verified for that exact domain.

Allowed wording:

- "I could not find an easy click-to-call path on the mobile page I checked."
- "This may be worth verifying before a full redesign."
- "I can send a short 3-point teardown."

Forbidden wording:

- "You do not have a phone number."
- "Your structured data is missing."
- "Your SEO is broken."
- Any language-specific email generated only from TLD or city without page-language verification.

## Safe first batch

Use only a small email batch:

- `priority = contact_now`
- `contacted_at IS NULL`
- `contact_channel = email`
- `json_extract(signals_json, '$.hasTel') = 0`
- `score >= 68`
- manually QA 10-20 domains before sending

Export created locally:

- `/tmp/freevibe-rescue-email-batch-2026-06-22.csv`
- `/tmp/freevibe-rescue-email-batch-2026-06-22.redacted.csv`

The real recipient is `contact_target`, not the `email` column. In this database the `email` column can contain generated message text.

## Sending recovery

Do not send from `mikitalashytski@gmail.com` until reputation is checked.

Before any new sending:

1. Create a separate outbound domain or subdomain.
2. Configure SPF, DKIM and DMARC.
3. Add Google Postmaster Tools.
4. Keep a suppression list for opt-outs and bad contacts.
5. Start with 5-8 manually checked emails per day.
6. Do not scale until replies and inbox placement are stable.

## Landing page

Outbound should point to `/website-rescue`, not the homepage.

The page promise:

- first find where the website loses leads
- then decide whether to fix or rebuild
- no generic redesign pitch
- audit fee can be credited toward rescue/rebuild

## Recommended next code fix in FreeVibe

Before sending from FreeVibe again:

1. Add a `verified_claim_json` field or equivalent export layer.
2. Require a second validation pass immediately before sending.
3. Add `language_confidence` and block sending if confidence is low.
4. Split `recipient_email` and `generated_email_body`; do not overload `email`.
5. Add a dry-run CSV export as the only default action.
6. Remove any automatic send mode until deliverability recovers.
