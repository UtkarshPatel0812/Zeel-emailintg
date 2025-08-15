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
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

// Styled email template
function createEmailTemplate(content, title) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: 'Helvetica', Arial, sans-serif;
            background-color: #f4f7fc;
            margin: 0;
            padding: 0;
            color: #333333;
        }

        .email-container {
            width: 90%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            margin: 20px auto;
        }

        .email-header {
            background-color: #B8941F ; /* Light blue background */
            color: #ffffff;
            padding: 20px;
            text-align: center;
            font-size: 18px; /* Normal readable font size */
            font-weight: 600;
        }

        .email-header .company-name {
            font-size: 30px; /* Slightly larger font for company name */
            font-weight: 700;
            letter-spacing: 1px;
        }

        .email-header .tagline {
            font-size: 14px;
            margin-top: 10px;
        }

        .email-content {
            line-height: 1.6;
            font-size: 16px;
            color: #333333;
        }

        .email-content h2 {
            font-size: 24px;  /* Normal readable size */
            color: #B8941F ;
            margin-bottom: 15px;
        }

        .email-content p {
            margin-bottom: 20px;
        }

        .email-content .button {
            display: inline-block;
            background-color: #B8941F ;
            color: #ffffff;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 5px;
            text-transform: uppercase;
            font-weight: bold;
            margin-top: 20px;
        }

        .email-footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #888888;
        }

        .email-footer p {
            margin: 5px 0;
        }

        .email-footer a {
            color: #B8941F ;
            text-decoration: none;
            transition: color 0.3s;
        }

        .email-footer a:hover {
            color: #1e2a3a;
        }

        /* Media Queries for Mobile Devices */
        @media (max-width: 600px) {
            /* Header Adjustments */
            .email-header {
                padding: 15px;
            }

            .email-header .company-name {
                font-size: 26px; /* Slightly smaller on mobile */
            }

            .email-content h2 {
                font-size: 20px; /* Adjust header size */
            }

            .email-content {
                padding: 15px; /* Reduce padding on small devices */
            }

            .email-footer {
                font-size: 12px;
            }

            /* Make buttons more responsive on mobile */
            .email-content .button {
                width: 100%;
                padding: 15px;
                font-size: 16px;
            }

            /* Mobile View Adjustments for Content Layout */
            .email-container {
                width: 100%; /* Full width on mobile */
                padding: 0 10px; /* Padding on the sides */
            }

            .email-content p {
                font-size: 14px; /* Slightly smaller text for better readability */
            }

            /* Footer Adjustments */
            .email-footer p {
                font-size: 12px; /* Smaller font in footer */
            }

            .email-footer a {
                font-size: 14px; /* Make footer links a bit larger on mobile */
            }
        }

        /* Additional Media Query for Large Screens (Optional) */
        @media (min-width: 768px) {
            .email-content {
                font-size: 18px; /* Slightly larger font on larger screens */
            }

            .email-footer {
                font-size: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="email-header">
            <div class="company-name">🎁 ${COMPANY_NAME}</div>
            <div class="tagline">Your Source for Exquisite Hampers & Artisan Jewelry 💎</div>
        </div>

        <!-- Content Section -->
        <div class="email-content">
            ${content}
        </div>

        <!-- Footer -->
        <div class="email-footer">
            <p>Thank you for choosing <strong>${COMPANY_NAME}</strong>! ✨</p>
            <p>We are dedicated to crafting unforgettable gifts with elegance and care.</p>
            <p><strong>Contact Us 📞</strong></p>
            <p>Email: <a href="mailto:${COMPANY_EMAIL}">${COMPANY_EMAIL}</a> | Phone: ${COMPANY_PHONE}</p>
            <p><a href="${SITE_URL}">Visit our website</a></p>
            <p>&copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved. 🛍️</p>
        </div>
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
