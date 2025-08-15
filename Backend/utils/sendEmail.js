const nodemailer = require("nodemailer");
require("dotenv").config();

// Config constants
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
const transporter = nodemailer.createTransporter(EMAIL_CONFIG);

// Responsive email template with luxury design
function createEmailTemplate(content, title) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${title}</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2C1810;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
        }
        
        /* Container styles */
        .email-wrapper {
            width: 100%;
            background-color: #f8f9fa;
            padding: 20px 0;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(44, 24, 16, 0.1);
        }
        
        /* Header styles */
        .email-header {
            background: linear-gradient(135deg, #D4AF37 0%, #B8941F 50%, #8B7355 100%);
            padding: 30px 20px;
            text-align: center;
            color: #ffffff;
        }
        
        .company-logo {
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 8px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .company-tagline {
            font-size: 14px;
            opacity: 0.95;
            font-weight: 400;
            letter-spacing: 0.5px;
        }
        
        /* Content styles */
        .email-content {
            padding: 30px 20px;
            background-color: #ffffff;
        }
        
        .content-title {
            font-size: 24px;
            font-weight: 700;
            color: #2C1810;
            margin-bottom: 20px;
            text-align: center;
            line-height: 1.3;
        }
        
        .content-text {
            font-size: 16px;
            color: #5D4E37;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        
        /* Field styles */
        .field-container {
            background-color: #FEFCF9;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            border-left: 4px solid #D4AF37;
        }
        
        .field-row {
            margin-bottom: 15px;
        }
        
        .field-row:last-child {
            margin-bottom: 0;
        }
        
        .field-label {
            font-weight: 600;
            color: #2C1810;
            font-size: 14px;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .field-value {
            font-size: 16px;
            color: #5D4E37;
            line-height: 1.5;
        }
        
        .field-value a {
            color: #D4AF37;
            text-decoration: none;
        }
        
        .field-value a:hover {
            text-decoration: underline;
        }
        
        /* Button styles */
        .btn-primary {
            display: inline-block;
            background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
            color: #ffffff;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            margin: 20px 0;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
        }
        
        /* Highlight box styles */
        .highlight-box {
            background: linear-gradient(135deg, #F9F1E7 0%, #FEFCF9 100%);
            border: 2px solid #D4AF37;
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
            text-align: center;
        }
        
        .highlight-title {
            font-size: 20px;
            font-weight: 700;
            color: #2C1810;
            margin-bottom: 10px;
        }
        
        .highlight-text {
            font-size: 16px;
            color: #5D4E37;
            line-height: 1.6;
        }
        
        /* Steps container */
        .steps-container {
            margin: 30px 0;
        }
        
        .step-item {
            background-color: #FEFCF9;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 15px;
            border-left: 4px solid #8B7355;
        }
        
        .step-number {
            font-size: 18px;
            font-weight: 700;
            color: #D4AF37;
            margin-bottom: 8px;
        }
        
        .step-title {
            font-size: 16px;
            font-weight: 600;
            color: #2C1810;
            margin-bottom: 5px;
        }
        
        .step-description {
            font-size: 14px;
            color: #5D4E37;
            line-height: 1.5;
        }
        
        /* Footer styles */
        .email-footer {
            background-color: #2C1810;
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
        }
        
        .footer-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #D4AF37;
        }
        
        .footer-text {
            font-size: 14px;
            color: #E5E5E5;
            margin-bottom: 10px;
            line-height: 1.5;
        }
        
        .footer-contact {
            font-size: 13px;
            color: #CCCCCC;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #444444;
        }
        
        .footer-contact a {
            color: #D4AF37;
            text-decoration: none;
        }
        
        /* Responsive styles */
        @media only screen and (max-width: 600px) {
            .email-wrapper {
                padding: 10px 0;
            }
            
            .email-container {
                margin: 0 10px;
                border-radius: 8px;
            }
            
            .email-header {
                padding: 25px 15px;
            }
            
            .company-logo {
                font-size: 24px;
            }
            
            .company-tagline {
                font-size: 12px;
            }
            
            .email-content {
                padding: 25px 15px;
            }
            
            .content-title {
                font-size: 20px;
                margin-bottom: 15px;
            }
            
            .content-text {
                font-size: 15px;
                margin-bottom: 15px;
            }
            
            .field-container {
                padding: 15px;
                margin-bottom: 15px;
            }
            
            .field-label {
                font-size: 13px;
            }
            
            .field-value {
                font-size: 15px;
            }
            
            .btn-primary {
                padding: 12px 25px;
                font-size: 15px;
                margin: 15px 0;
                width: 100%;
                display: block;
            }
            
            .highlight-box {
                padding: 20px 15px;
                margin: 20px 0;
            }
            
            .highlight-title {
                font-size: 18px;
            }
            
            .highlight-text {
                font-size: 15px;
            }
            
            .step-item {
                padding: 15px;
                margin-bottom: 12px;
            }
            
            .step-number {
                font-size: 16px;
            }
            
            .step-title {
                font-size: 15px;
            }
            
            .step-description {
                font-size: 13px;
            }
            
            .email-footer {
                padding: 25px 15px;
            }
            
            .footer-title {
                font-size: 16px;
            }
            
            .footer-text {
                font-size: 13px;
            }
            
            .footer-contact {
                font-size: 12px;
            }
        }
        
        @media only screen and (max-width: 480px) {
            .email-container {
                margin: 0 5px;
            }
            
            .email-header {
                padding: 20px 10px;
            }
            
            .company-logo {
                font-size: 22px;
            }
            
            .email-content {
                padding: 20px 10px;
            }
            
            .content-title {
                font-size: 18px;
            }
            
            .field-container {
                padding: 12px;
            }
            
            .highlight-box {
                padding: 15px 10px;
            }
            
            .step-item {
                padding: 12px;
            }
            
            .email-footer {
                padding: 20px 10px;
            }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            .email-wrapper {
                background-color: #1a1a1a;
            }
            
            .email-container {
                background-color: #2a2a2a;
            }
            
            .email-content {
                background-color: #2a2a2a;
            }
            
            .content-title {
                color: #ffffff;
            }
            
            .content-text {
                color: #cccccc;
            }
            
            .field-container {
                background-color: #333333;
            }
            
            .field-label {
                color: #D4AF37;
            }
            
            .field-value {
                color: #cccccc;
            }
        }
        
        /* Outlook specific fixes */
        .outlook-fix {
            mso-line-height-rule: exactly;
        }
        
        /* High DPI display support */
        @media only screen and (-webkit-min-device-pixel-ratio: 2) {
            .email-header {
                background: linear-gradient(135deg, #D4AF37 0%, #B8941F 50%, #8B7355 100%);
            }
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td align="center">
                    <div class="email-container">
                        <!-- Header -->
                        <div class="email-header">
                            <div class="company-logo">🎁 ${COMPANY_NAME}</div>
                            <div class="company-tagline">Premium Hampers & Handcrafted Jewelry</div>
                        </div>

                        <!-- Content Section -->
                        <div class="email-content">
                            ${content}
                        </div>

                        <!-- Footer -->
                        <div class="email-footer">
                            <div class="footer-title">Thank you for choosing ${COMPANY_NAME}!</div>
                            <div class="footer-text">Creating extraordinary moments, one gift at a time.</div>
                            
                            <div class="footer-contact">
                                <strong>Contact Information</strong><br>
                                Email: <a href="mailto:${COMPANY_EMAIL}">${COMPANY_EMAIL}</a><br>
                                Phone: <a href="tel:${COMPANY_PHONE.replace(/\D/g, '')}">${COMPANY_PHONE}</a><br>
                                Address: ${COMPANY_ADDRESS}<br>
                                Website: <a href="${SITE_URL}">${SITE_URL}</a>
                                
                                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #444444;">
                                    <div style="font-size: 12px; color: #999999;">
                                        &copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
`;
}

// Send dual emails
async function sendDualEmails(
  to,
  subjectAdmin,
  contentAdmin,
  subjectUser,
  contentUser
) {
  try {
    const htmlAdmin = createEmailTemplate(contentAdmin, subjectAdmin);
    const htmlUser = createEmailTemplate(contentUser, subjectUser);

    // Send to admin
    await transporter.sendMail({
      from: `"${COMPANY_NAME}" <${EMAIL_CONFIG.auth.user}>`,
      to: ADMIN_EMAIL,
      subject: subjectAdmin,
      html: htmlAdmin,
    });

    // Send to user
    await transporter.sendMail({
      from: `"${COMPANY_NAME}" <${EMAIL_CONFIG.auth.user}>`,
      to,
      subject: subjectUser,
      html: htmlUser,
    });

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
}

module.exports = {
  sendDualEmails,
  createEmailTemplate,
};