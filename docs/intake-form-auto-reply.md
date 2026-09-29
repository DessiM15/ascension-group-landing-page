# Intake form confirmation email

When an athlete submits the Assessment and Intake Form, they get an email that says the form was received and someone will be in touch. The email is sent by Google from the account that owns the form, so this has to be set up inside the form itself. It takes about five minutes.

The script is in `intake-form-auto-reply.gs` next to this file.

## Steps for Jeff

1. Open the form in edit mode (the same view where you add questions).
2. Click the three dots in the top right corner of the form, then **Script editor**. A new tab opens with an empty file called `Code.gs`.
3. Delete anything in that file. Paste in the whole contents of `intake-form-auto-reply.gs`.
4. Click the save icon (or press Ctrl+S / Cmd+S). Name the project something like "Intake confirmation" if it asks.
5. At the top of the editor there is a dropdown that says `onFormSubmit`. Change it to **installTrigger**, then click **Run**.
6. Google asks for permission the first time. Click **Review permissions**, pick your account, click **Advanced**, then **Go to Intake confirmation (unsafe)**, then **Allow**. The warning appears because the script is your own and not published by Google. It only needs permission to read form responses and send email as you.
7. The log at the bottom should say "Trigger installed." You are done.

## Test it

Open the form's live link, fill it in with your own email address, and submit. Within about a minute you should receive the confirmation email. Check spam the first time.

## What the email says

Subject: We received your intake form

> Hi [first name],
>
> Thank you for submitting your Assessment and Intake Form to Ascension Athlete Group. We received it and someone from our team will be in touch with you as soon as possible.
>
> In the meantime, you can reach us by replying to this email or at info@ascensionathletegroup.com.
>
> Developing Athletes Beyond The Game.
> Ascension Athlete Group

To change the wording, edit the `text` and `html` sections in the script and save. No need to run installTrigger again.

## Good to know

- The email goes out from the Google account that owns the form, with replies directed to info@ascensionathletegroup.com. Change `replyTo` in the CONFIG block at the top of the script if that should be different.
- It reads the athlete's address from the form's **Email** question and their name from **Full Name**. If those questions are ever renamed, update `emailQuestion` and `nameQuestion` in CONFIG to match.
- A personal Gmail account can send about 100 of these per day. A Google Workspace account can send about 1,500. Either is far more than the form will see.
- If the form is ever copied or rebuilt, the script does not come with it. Repeat the steps on the new form.
