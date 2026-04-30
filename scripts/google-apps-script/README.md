# Booking form → Google Sheet + Email

The website's booking form submits to a Google Apps Script Web App that
lives inside a Google Sheet. Each inquiry becomes a new row in the sheet,
and an email notification fires immediately.

## What you'll need

- A Google account (the one that owns the sheet and receives notifications)
- ~10 minutes
- Access to your Netlify dashboard

## Step-by-step setup

### 1. Create the tracking Google Sheet

1. Open <https://sheets.google.com/> and click **Blank** to start a new sheet.
2. Rename it to something like **"Mia Snap Lounge — Bookings"**.
3. (Optional) Rename the first tab from `Sheet1` to `Bookings`. The script
   creates this tab automatically the first time a submission comes in,
   so you can also skip this step.

### 2. Add the script

1. In your sheet, click **Extensions → Apps Script**. A new tab opens
   with a default `Code.gs` file showing `function myFunction() {}`.
2. **Delete everything in `Code.gs`.**
3. Open [`booking-form.gs`](./booking-form.gs) in this repo, copy its
   entire contents, and paste them into `Code.gs`.
4. Confirm the two settings at the top of the script are right:
   - `NOTIFY_EMAIL` — where notifications should be sent
   - `SHEET_NAME` — the tab name (default `"Bookings"`)
5. Click the **floppy-disk Save** icon (or `⌘+S`).

### 3. Test the script before deploying

1. In the Apps Script toolbar's function dropdown, select
   **`testSubmission`**.
2. Click **Run**.
3. The first time you do this, Google asks for permission:
   - Click **Review permissions**
   - Pick the same Google account that owns the sheet
   - You'll see "Google hasn't verified this app" — click
     **Advanced → Go to (your project) (unsafe)**. (This is normal for
     personal Apps Scripts. The script is yours; Google's warning is for
     unverified third-party apps.)
   - Click **Allow**.
4. Within a few seconds:
   - Switch back to the Sheet tab — a `Bookings` tab should now exist
     with one test row.
   - Check your inbox — the notification email should be there.
5. Once you've confirmed both, delete the test row from the sheet.

### 4. Deploy as a Web App

1. Back in the Apps Script editor, click **Deploy → New deployment**
   (top-right).
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Description**: `Booking form v1` (anything)
   - **Execute as**: **Me (your-email@gmail.com)**
   - **Who has access**: **Anyone** _(important — must be Anyone, not Anyone with Google account)_
4. Click **Deploy**.
5. Google shows you the **Web app URL**. It looks like:
   ```
   https://script.google.com/macros/s/AKfyc.../exec
   ```
   **Copy this URL.** You'll paste it into Netlify in the next step.
6. Click **Done**.

> **Note:** If you ever change the script later, you'll need to either
> redeploy (Deploy → Manage deployments → pencil icon → New version)
> _or_ select "New deployment" again. Saving alone doesn't update the
> live endpoint.

### 5. Wire the URL into Netlify

1. Open <https://app.netlify.com/> and go to your Mia Snap Lounge site.
2. **Site settings → Environment variables** → **Add a variable**.
3. Add:
   - **Key**: `PUBLIC_BOOKING_FORM_URL`
   - **Value**: the Web app URL you copied
   - **Scopes**: leave default (all scopes)
4. Save.
5. Trigger a redeploy: **Deploys → Trigger deploy → Deploy site**.
   (Env vars only take effect on the next build.)

### 6. Verify end-to-end

1. Once the redeploy finishes, open the live booking page on your site.
2. Submit a real test inquiry.
3. Confirm:
   - You land on the thank-you page
   - A new row appears in the Sheet
   - The notification email arrives in your inbox
   - The email's "Reply" goes to the inquirer's email address (so Tenille
     can just hit Reply to respond)

## Local development

To test the form locally with the same submission flow, create a `.env`
file in the project root:

```
PUBLIC_BOOKING_FORM_URL=https://script.google.com/macros/s/AKfyc.../exec
```

`.env` is gitignored, so this stays local. Restart `npm run dev` to pick
up the new variable.

## Troubleshooting

| Symptom                                 | Fix                                                                                                                                                |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Form shows "not configured yet" message | `PUBLIC_BOOKING_FORM_URL` isn't set in Netlify, or the site hasn't been redeployed since you set it.                                               |
| Submitted form, but no row in sheet     | Check Apps Script → **Executions** tab for errors. Most common cause: deployment access set to "Anyone with Google account" instead of **Anyone**. |
| Sheet updates but no email              | Apps Script daily email quota may be exceeded (100/day for free Gmail accounts). Check spam folder too.                                            |
| "Authorization required" error          | Re-run `testSubmission` from the editor and re-grant permissions.                                                                                  |
| Need to update the script               | Change the code → Save → **Deploy → Manage deployments → pencil icon → Version: New version → Deploy**. The URL stays the same.                    |

## Spam protection

The form includes a hidden "honeypot" field. Bots that auto-fill every
input will fill it; humans can't see it. Submissions where this field is
populated are silently dropped client-side and never reach the script.

If spam still gets through, the next step is adding [Google
reCAPTCHA](https://developers.google.com/recaptcha) — let me know.
