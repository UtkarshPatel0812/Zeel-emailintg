const express = require("express");
const router = express.Router();
const { sendDualEmails } = require("../utils/sendEmail");

const COMPANY_NAME = process.env.COMPANY_NAME || "Luxe Collections";
const COMPANY_EMAIL = process.env.CUSTOM_EMAIL || "custom@luxecollections.com";
const COMPANY_PHONE = process.env.COMPANY_PHONE || "+1 (234) 567-890";
const COMPANY_WHATSAPP = process.env.COMPANY_WHATSAPP || "+1234567890";

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const customerContent = `
  <div style="background-color: #f4f4f4; padding: 20px 0;">
    <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 8px; padding: 20px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);">
      <h2 style="font-size: 24px; color: #B8941F; text-align: center;">💌 Hi ${data.name}, we received your message!</h2>
      <p style="font-size: 16px; line-height: 1.6; color: #555555; text-align: center;">Below are the details of your inquiry:</p>

      <table style="width: 100%; margin-top: 30px; background-color: #f9f9f9; border-radius: 8px; padding: 20px;">
        <tr>
          <td style="padding: 10px 0; font-size: 16px; color: #333333;">
            <strong style="color: #B8941F ;">Subject:</strong><br />
            <span style="font-size: 15px; color: #666666;">${data.subject}</span>
          </td>
          <td style="padding: 10px 0; font-size: 16px; color: #333333;">
            <strong style="color: #B8941F ;">Your Message:</strong><br />
            <span style="font-size: 15px; color: #666666;">${data.message}</span>
          </td>
        </tr>
      </table>

      <p style="font-size: 16px; line-height: 1.6; color: #555555; text-align: center; margin-top: 20px;">
        💬 If you have any urgent questions, feel free to <strong><a href="mailto:${COMPANY_EMAIL}" style="color: #B8941F ;">Contact us</a></strong> directly.
      </p>
    </div>
  </div>
  <style>
    @media (max-width: 600px) {
      .email-container {
        width: 100%;
        padding: 0 15px;
      }
      h2 {
        font-size: 22px;
      }
      .email-content p {
        font-size: 14px;
      }
      table {
        padding: 15px;
      }
      td {
        display: block;
        width: 100%;
        padding: 10px 0;
      }
    }
  </style>
`;


    const adminContent = `
  <div style="background-color: #f4f4f4; padding: 20px 0;">
    <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 8px; padding: 20px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);">
      <h2 style="font-size: 24px; color: #B8941F ; text-align: center;">📬 New Submission from ${data.name}</h2>
      <p style="font-size: 16px; line-height: 1.6; color: #555555; text-align: center;">A new inquiry has been submitted. Please find the details below:</p>

      <table style="width: 100%; margin-top: 30px; background-color: #f9f9f9; border-radius: 8px; padding: 20px;">
        <tr>
          <td style="padding: 10px 0; font-size: 16px; color: #333333;">
            <strong style="color: #B8941F ;">Customer Name:</strong><br />
            <span style="font-size: 15px; color: #666666;">${data.name}</span>
          </td>
          <td style="padding: 10px 0; font-size: 16px; color: #333333;">
            <strong style="color: #B8941F ;">Email:</strong><br />
            <span style="font-size: 15px; color: #666666;">${data.email}</span>
          </td>
           <td style="padding: 10px 0; font-size: 16px; color: #333333;">
            <strong style="color: #B8941F ;">Phone Number:</strong><br />
            <span style="font-size: 15px; color: #666666;">${data.phone}</span>
          </td>
        </tr>
        <tr>
        <td style="padding: 10px 0; font-size: 16px; color: #333333;">
            <strong style="color: #B8941F ;">Subject:</strong><br />
            <span style="font-size: 15px; color: #666666;">${data.subject}</span>
          </td>
          <td style="padding: 10px 0; font-size: 16px; color: #333333;">
            <strong style="color: #B8941F ;">Message:</strong><br />
            <span style="font-size: 15px; color: #666666;">${data.message}</span>
          </td>
          </tr>
      </table>

      <p style="font-size: 16px; line-height: 1.6; color: #555555; text-align: center; margin-top: 20px;">
        🔔 Please respond to this inquiry as soon as possible.
      </p>
    </div>
  </div>
  <style>
    @media (max-width: 600px) {
      .email-container {
        width: 100%;
        padding: 0 15px;
      }
      h2 {
        font-size: 22px;
      }
      .email-content p {
        font-size: 14px;
      }
      table {
        padding: 15px;
      }
      td {
        display: block;
        width: 100%;
        padding: 10px 0;
      }
    }
  </style>
`;


    const result = await sendDualEmails(
      data.email,
      `New Contact Submission - ${COMPANY_NAME}`,
      adminContent,
      `Thanks for Reaching Out - ${COMPANY_NAME}`,
      customerContent
    );

    if (result.success) {
      return res.json({
        success: true,
        message: "Contact form emails sent successfully",
      });
    } else {
      throw new Error("Failed to send emails");
    }
  } catch (error) {
    console.error("Error sending contact form emails:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send contact form emails",
      error: error.message,
    });
  }
});

module.exports = router;
