/**
 * Mia Snap Lounge / The MIA Collective
 * Booking form endpoint — Google Apps Script Web App
 *
 * Receives POST submissions from the website's booking form,
 * appends each one as a row in the host Google Sheet, and emails
 * a notification to NOTIFY_EMAIL.
 *
 * See ./README.md for full setup instructions.
 */

// ─── Edit these two values, then deploy ─────────────────────────
const NOTIFY_EMAIL = "themiacollectivellc@gmail.com";
const SHEET_NAME = "Bookings";
// ────────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    const data = (e && e.parameter) || {};
    const sheet = ensureSheet_();

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data["event-date"] || "",
      data["event-type"] || "",
      data.package || "",
      data.venue || "",
      data.guests || "",
      data.details || "",
    ]);

    sendNotification_(data);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    console.error(err);
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function ensureSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Event Date",
      "Event Type",
      "Package",
      "Venue",
      "Guests",
      "Details",
    ]);
    sheet.setFrozenRows(1);
    sheet.getRange("A1:J1").setFontWeight("bold");
  }
  return sheet;
}

function sendNotification_(data) {
  const subject = `New Booking Inquiry — ${data.name || "Unknown"}`;
  const lines = [
    "A new inquiry was submitted on miasnaplounge.com.",
    "",
    `Name:        ${data.name || ""}`,
    `Email:       ${data.email || ""}`,
    `Phone:       ${data.phone || ""}`,
    `Event Date:  ${data["event-date"] || ""}`,
    `Event Type:  ${data["event-type"] || ""}`,
    `Package:     ${data.package || ""}`,
    `Venue:       ${data.venue || ""}`,
    `Guests:      ${data.guests || ""}`,
    "",
    "Details:",
    data.details || "(none)",
    "",
    "—",
    "Reply directly to this email to respond to the inquirer.",
  ];

  const opts = {};
  const isValidEmail =
    data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (isValidEmail) opts.replyTo = data.email;

  MailApp.sendEmail(NOTIFY_EMAIL, subject, lines.join("\n"), opts);
}

/**
 * Run this manually from the Apps Script editor to verify the script
 * works (writes a row + sends a test email). Once you see both, delete
 * the test row from the sheet and you're set.
 */
function testSubmission() {
  doPost({
    parameter: {
      name: "Test Person",
      email: "test@example.com",
      phone: "(443) 555-0100",
      "event-date": "2026-08-15",
      "event-type": "Wedding",
      package: "The Marquee",
      venue: "The Belvedere, Baltimore",
      guests: "120",
      details: "This is a test submission from the Apps Script editor.",
    },
  });
}
