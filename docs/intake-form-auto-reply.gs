/**
 * Ascension Athlete Group: confirmation email for the Assessment & Intake Form.
 *
 * Runs inside the Google Form (Script editor). When someone submits the form,
 * it emails them a short "we received your intake form" message.
 *
 * Install: paste this file into the form's Script editor, save, then run
 * installTrigger once and approve the permissions. See intake-form-auto-reply.md.
 */

var CONFIG = {
  // These must match the start of the question titles on the form.
  emailQuestion: "Email",
  nameQuestion: "Full Name",

  // How the email appears in the athlete's inbox.
  fromName: "Ascension Athlete Group",
  // Leave empty until the professional email exists. Replies then go to the Google
  // account that owns the form. Once the address is set up, put it here.
  replyTo: "",
  subject: "We received your intake form",
  websiteUrl: "https://ascensionathletegroup.com",
  instagramUrl: "https://www.instagram.com/ascensionathletegroup/",
};

function onFormSubmit(e) {
  var answers = {};
  e.response.getItemResponses().forEach(function (r) {
    answers[r.getItem().getTitle().trim()] = r.getResponse();
  });

  var email = String(findAnswer(answers, CONFIG.emailQuestion) || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return; // No usable email, nothing to send.

  var name = String(findAnswer(answers, CONFIG.nameQuestion) || "").trim();
  var firstName = name.split(/\s+/)[0] || "there";

  var reachText = CONFIG.replyTo
    ? "In the meantime, you can reach us by replying to this email or at " + CONFIG.replyTo + "."
    : "In the meantime, you can reach us by replying to this email.";
  var reachHtml = CONFIG.replyTo
    ? "In the meantime, you can reach us by replying to this email or at <a href=\"mailto:" + CONFIG.replyTo + "\">" + CONFIG.replyTo + "</a>."
    : "In the meantime, you can reach us by replying to this email.";

  var text =
    "Hi " + firstName + ",\n\n" +
    "Thank you for submitting your Assessment and Intake Form to Ascension Athlete Group. We received it and someone from our team will be in touch with you as soon as possible.\n\n" +
    reachText + "\n\n" +
    "Developing Athletes Beyond The Game.\n" +
    "Ascension Athlete Group\n" +
    CONFIG.websiteUrl + "\n" +
    CONFIG.instagramUrl + "\n";

  var html =
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111;max-width:560px">' +
    "<p>Hi " + escapeHtml(firstName) + ",</p>" +
    "<p>Thank you for submitting your Assessment and Intake Form to <strong>Ascension Athlete Group</strong>. We received it and someone from our team will be in touch with you as soon as possible.</p>" +
    "<p>" + reachHtml + "</p>" +
    '<p style="margin-top:28px;color:#555;font-size:13px;letter-spacing:0.08em;text-transform:uppercase">Developing Athletes Beyond The Game.</p>' +
    '<p style="color:#555;font-size:13px">Ascension Athlete Group<br>' +
    '<a href="' + CONFIG.websiteUrl + '" style="color:#a8862f">' + CONFIG.websiteUrl.replace(/^https?:\/\//, "") + "</a><br>" +
    '<a href="' + CONFIG.instagramUrl + '" style="color:#a8862f">Instagram</a></p>' +
    "</div>";

  var message = {
    to: email,
    subject: CONFIG.subject,
    body: text,
    htmlBody: html,
    name: CONFIG.fromName,
  };
  if (CONFIG.replyTo) message.replyTo = CONFIG.replyTo;

  MailApp.sendEmail(message);
}

/** Run this once from the Script editor to connect onFormSubmit to the form. */
function installTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === "onFormSubmit") ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger("onFormSubmit").forForm(FormApp.getActiveForm()).onFormSubmit().create();
  Logger.log("Trigger installed. Submit a test response to check the email.");
}

function findAnswer(answers, label) {
  var want = label.toLowerCase();
  var key = Object.keys(answers).filter(function (k) {
    return k.toLowerCase().indexOf(want) === 0;
  })[0];
  return key ? answers[key] : "";
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
