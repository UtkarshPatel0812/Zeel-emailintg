const express = require("express");
const router = express.Router();
const { sendDualEmails } = require("../utils/sendEmail");

const COMPANY_NAME = process.env.COMPANY_NAME || "Luxe Collections";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@luxecollections.com";

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    const today = new Date().toLocaleDateString();

    // Admin email content with enhanced styling
    const adminContent = `
  <div style="background-color: #f4f4f4; padding: 20px 0;">
    <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 8px; padding: 20px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);">
      <h2 style="font-size: 24px; color: #2a6f91 ; text-align: center;">📧 New Newsletter Subscription</h2>

      <div class="field" style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <!-- Email Address Section -->
  <div class="field-label" style="font-size: 16px; color: #333; flex: 1; margin-right: 20px;">
    Email Address:
    <div class="field-value" style="flex: 2;">
    <a href="mailto:${email}" style="color: #2a6f91;">${email}</a>
  </div>
  </div>
  

  <!-- Subscription Date Section -->
  <div class="field-label" style="font-size: 16px; color: #333; flex: 1; margin-left: 20px">
    Subscription Date:
    <div class="field-value" style="flex: 2;">
      ${new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>
  </div>
</div>


      <div class="highlight-box" style="background-color: #f1f1f1; padding: 15px; margin-top: 20px; border-left: 5px solid #B8941F ;">
        <h3 style="font-size: 18px; color: #2a6f91 ;">📝 Action Required</h3>
        <p style="font-size: 16px; color: #555;">A new customer has subscribed to the ${COMPANY_NAME} newsletter. Please add them to the mailing list and ensure they receive future communications.</p>
      </div>
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
      .field-label, .field-value {
        font-size: 14px;
      }
      .highlight-box {
        padding: 10px;
      }
    }
  </style>
`;

    // Welcome email content with enhanced styling
    const welcomeContent = `
<div style="background-color: #f4f4f4; padding: 20px 0;">
  <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 8px; padding: 20px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);">
    <h2 style="font-size: 24px; color: #B8941F; text-align: center;">🌟 Welcome to Our Exclusive Community! 🎉</h2>

    <div class="field" style="margin-bottom: 20px;">
      <p style="font-size: 16px; color: #555;">Welcome to the <strong>${COMPANY_NAME}</strong> family! You are now part of an exclusive community of luxury enthusiasts who appreciate the finest hampers and handcrafted jewelry. 🛍️✨</p>
    </div>

    <div class="steps-container" style="margin-top: 20px;">
      <h3 style="color: #2C1810; text-align: center; margin-bottom: 30px; font-size: 18px; font-weight: 500;">
        We look forward to keeping you updated with our latest products and offerings. 📩
      </h3>

      <p style="font-size: 16px; color: #555555; line-height: 1.6; text-align: center;">
        Should you wish to unsubscribe from our communications, kindly reply to this email, and we will promptly remove you from our mailing list. ❌
      </p>
    </div>

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
    .button {
      padding: 10px 25px;
    }
    .collections-grid {
      flex-direction: column;
      align-items: center;
    }
    .collection-item {
      flex: 1 1 100%;
      text-align: center;
    }
  }
</style>
`;

    const result = await sendDualEmails(
      email,
      `New Newsletter Subscriber - ${COMPANY_NAME}`,
      adminContent,
      `Welcome to ${COMPANY_NAME}!`,
      welcomeContent,
      ADMIN_EMAIL
    );

    if (result.success) {
      return res.json({
        success: true,
        message: "Newsletter subscription email sent successfully",
      });
    } else {
      throw new Error("Failed to send one or more emails");
    }
  } catch (error) {
    console.error("Newsletter Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send newsletter email",
      error: error.message,
    });
  }
});

module.exports = router;
