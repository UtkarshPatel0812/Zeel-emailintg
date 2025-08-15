import nodemailer from "nodemailer";

// Email configuration using environment variables
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@luxecollections.com";
const COMPANY_NAME = process.env.COMPANY_NAME || "Luxe Collections";
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || "info@luxecollections.com";
const COMPANY_PHONE = process.env.COMPANY_PHONE || "+1 (234) 567-890";
const COMPANY_ADDRESS =
  process.env.COMPANY_ADDRESS || "123 Luxury Lane, Premium City, PC 12345";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://luxecollections.com";

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport(EMAIL_CONFIG);
};

// Email templates
export const createEmailTemplate = (content: string, title: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <style>
      body { 
        font-family: 'Arial', sans-serif; 
        line-height: 1.6; 
        color: #333; 
        margin: 0; 
        padding: 0; 
        background-color: #f4f4f4;
      }
      .container { 
        max-width: 600px; 
        margin: 0 auto; 
        padding: 20px; 
        background-color: #ffffff;
      }
      .header { 
        background: linear-gradient(135deg, #D4AF37 0%, #8B7355 100%); 
        color: white; 
        padding: 30px; 
        text-align: center; 
        border-radius: 10px 10px 0 0; 
      }
      .content { 
        background: #f9f9f9; 
        padding: 30px; 
        border-radius: 0 0 10px 10px; 
      }
      .footer { 
        text-align: center; 
        margin-top: 30px; 
        color: #8B7355; 
        font-size: 14px; 
        padding: 20px;
        border-top: 1px solid #eee;
      }
      .logo {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .field { 
        margin-bottom: 20px; 
        padding: 15px; 
        background: white; 
        border-radius: 8px; 
        border-left: 4px solid #D4AF37; 
      }
      .field-label { 
        font-weight: bold; 
        color: #2C1810; 
        margin-bottom: 5px; 
      }
      .field-value { 
        color: #5D4E37; 
      }
      .button {
        display: inline-block;
        background: linear-gradient(135deg, #D4AF37 0%, #8B7355 100%);
        color: white;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
        margin: 10px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="logo">🎁 ${COMPANY_NAME}</div>
        <p>Premium Hampers & Handcrafted Jewelry</p>
      </div>
      <div class="content">
        ${content}
      </div>
      <div class="footer">
        <p>Thank you for choosing ${COMPANY_NAME}!</p>
        <p>Creating extraordinary moments, one gift at a time.</p>
        <p>
          <strong>Contact Us:</strong><br>
          Email: ${COMPANY_EMAIL}<br>
          Phone: ${COMPANY_PHONE}<br>
          Address: ${COMPANY_ADDRESS}<br>
          Website: ${SITE_URL}
        </p>
      </div>
    </div>
  </body>
</html>
`;

// Send email function
export const sendEmail = async (
  to: string,
  subject: string,
  htmlContent: string
) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"${COMPANY_NAME}" <${EMAIL_CONFIG.auth.user}>`,
      to,
      subject,
      html: htmlContent,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error: any) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};

// Send emails to both admin and user
export const sendDualEmails = async (
  userEmail: string,
  adminSubject: string,
  adminContent: string,
  userSubject: string,
  userContent: string
) => {
  try {
    const adminEmailHtml = createEmailTemplate(adminContent, adminSubject);
    const userEmailHtml = createEmailTemplate(userContent, userSubject);

    // Send to admin
    const adminResult = await sendEmail(
      ADMIN_EMAIL,
      adminSubject,
      adminEmailHtml
    );

    // Send to user
    const userResult = await sendEmail(userEmail, userSubject, userEmailHtml);

    return {
      success: adminResult.success && userResult.success,
      adminResult,
      userResult,
    };
  } catch (error: any) {
    console.error("Error sending dual emails:", error);
    return { success: false, error: error.message };
  }
};
