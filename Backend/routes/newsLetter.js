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
      <div class="content-title">📧 New Newsletter Subscription</div>
      <div class="content-text">A new customer has joined our newsletter community.</div>
      
      <div class="field-container">
        <div class="field-row">
          <div class="field-label">Email Address</div>
          <div class="field-value"><a href="mailto:${email}">${email}</a></div>
        </div>
        <div class="field-row">
          <div class="field-label">Subscription Date</div>
          <div class="field-value">${new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</div>
        </div>
      </div>
      
      <div class="highlight-box">
        <div class="highlight-title">📝 Action Required</div>
        <div class="highlight-text">
          Please add this subscriber to the mailing list and ensure they receive future newsletters and promotional communications.
        </div>
      </div>
`;

    // Welcome email content with enhanced styling
    const welcomeContent = `
      <div class="content-title">🌟 Welcome to Our Exclusive Community!</div>
      <div class="content-text">
        Welcome to the <strong>${COMPANY_NAME}</strong> family! You are now part of an exclusive community 
        of luxury enthusiasts who appreciate the finest hampers and handcrafted jewelry.
      </div>
      
      <div class="highlight-box">
        <div class="highlight-title">What to Expect</div>
        <div class="highlight-text">
          • Exclusive previews of new collections<br>
          • Special member-only discounts<br>
          • Behind-the-scenes crafting stories<br>
          • Early access to limited editions
        </div>
      </div>
      
      <div class="steps-container">
        <div class="step-item">
          <div class="step-number">Step 1</div>
          <div class="step-title">Explore Our Collections</div>
          <div class="step-description">Browse our premium hampers and handcrafted jewelry</div>
        </div>
        <div class="step-item">
          <div class="step-number">Step 2</div>
          <div class="step-title">Customize Your Experience</div>
          <div class="step-description">Use our custom builder for personalized creations</div>
        </div>
        <div class="step-item">
          <div class="step-number">Step 3</div>
          <div class="step-title">Enjoy Premium Service</div>
          <div class="step-description">Experience our white-glove customer service</div>
        </div>
      </div>
      
      <div style="text-align: center;">
        <a href="${SITE_URL}" class="btn-primary">Start Shopping</a>
      </div>
      
      <div class="content-text" style="text-align: center; margin-top: 20px; font-size: 14px; color: #8B7355;">
        You can unsubscribe at any time by replying to this email or clicking the unsubscribe link in our newsletters.
      </div>
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
