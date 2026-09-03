import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, message } = body;

    /* ============================================
       VALIDATION
    ============================================ */

    if (!name || !email || !message) {
      return Response.json(
        {
          message: "Name, email and message are required.",
        },
        {
          status: 400,
        },
      );
    }

    /* ============================================
       EMAIL CONFIGURATION
    ============================================ */

    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL;

    const smtpHost = process.env.SMTP_HOST;

    const smtpPort = Number(process.env.SMTP_PORT || 587);

    const smtpUser = process.env.SMTP_USER;

    const smtpPassword = process.env.SMTP_PASSWORD;

    const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;

    if (!notificationEmail || !smtpHost || !smtpUser || !smtpPassword) {
      console.error("Contact form email configuration is missing.");

      return Response.json(
        {
          message: "Email service is not configured correctly.",
        },
        {
          status: 500,
        },
      );
    }

    /* ============================================
       CREATE SMTP TRANSPORTER
    ============================================ */

    const transporter = nodemailer.createTransport({
      host: smtpHost,

      port: smtpPort,

      secure: smtpPort === 465,

      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    /* ============================================
       SUBJECT
    ============================================ */

    const subject = `New Enquiry: ${name} has posted a new enquiry on site.`;

    /* ============================================
       EMAIL BODY
    ============================================ */

    const html = `

      <div style="
        font-family: Arial, Helvetica, sans-serif;
        max-width: 700px;
        margin: auto;
        color: #092740;
      ">

        <h2 style="
          color: #092740;
          border-bottom: 2px solid #c99a3d;
          padding-bottom: 10px;
        ">
          New Website Enquiry
        </h2>


        <table
          cellpadding="8"
          cellspacing="0"
          style="
            width: 100%;
            border-collapse: collapse;
          "
        >

          <tr>
            <td><strong>Name</strong></td>
            <td>${escapeHtml(name)}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${escapeHtml(email)}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${escapeHtml(phone || "Not provided")}</td>
          </tr>

          <tr>
            <td><strong>Company</strong></td>
            <td>${escapeHtml(company || "Not provided")}</td>
          </tr>

        </table>


        <h3 style="
          margin-top: 25px;
          color: #092740;
        ">
          Enquiry
        </h3>


        <div style="
          padding: 15px;
          background: #f7f6f2;
          border-left: 3px solid #c99a3d;
          white-space: pre-wrap;
        ">
          ${escapeHtml(message)}
        </div>


        <p style="
          margin-top: 25px;
          color: #777;
          font-size: 12px;
        ">
          This enquiry was submitted through the
          UK Facility Management Services website.
        </p>

      </div>

    `;

    /* ============================================
       SEND EMAIL
    ============================================ */

    await transporter.sendMail({
      from: fromEmail,

      to: notificationEmail,

      replyTo: email,

      subject: subject,

      html: html,
    });

    /* ============================================
       SUCCESS
    ============================================ */

    return Response.json(
      {
        success: true,

        message: "Your enquiry has been submitted successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      {
        message: "Unable to send your enquiry. Please try again later.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =====================================================
   HTML ESCAPE
   Prevents user-entered HTML from being rendered
   inside the notification email.
===================================================== */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
