const express = require("express");
const router = express.Router();
const { sendDualEmails } = require("../utils/sendEmail");

const COMPANY_NAME = process.env.COMPANY_NAME || "Luxe Collections";

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    // Admin email content with enhanced styling
    const adminContent = `
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #fff; padding: 20px; border-radius: 8px;">
      <div class="admin-priority" style="font-size: 18px; color: #B8941F; display: flex; align-items: center; margin-bottom: 20px;">
        <span style="font-size: 24px; margin-right: 10px;">⚡</span>
        <strong>Priority Custom Builder Quote Request</strong>
      </div>

      <h2 style="font-size: 22px; color: #2C1810; margin-bottom: 20px;">🎨 New Custom Builder Quote Request</h2>

      <div class="field" style="margin-bottom: 20px; display: flex; justify-content: space-between;">
        <div class="field-label" style="font-size: 16px; color: #333;">Customer Name:</div>
        <div class="field-value" style="font-size: 16px; color: #555;">${
          data.customerName || "Not provided"
        }</div>
      </div>

      <div class="field" style="margin-bottom: 20px; display: flex; justify-content: space-between;">
        <div class="field-label" style="font-size: 16px; color: #333;">Email Address:</div>
        <div class="field-value">
          <a href="mailto:${
            data.customerEmail
          }" style="font-size: 16px; color: #2a6f91;">${
      data.customerEmail || "Not provided"
    }</a>
        </div>
      </div>

      <div class="field" style="margin-bottom: 20px; display: flex; justify-content: space-between;">
        <div class="field-label" style="font-size: 16px; color: #333;">Category:</div>
        <div class="field-value" style="font-size: 16px; color: #555;">${
          data.category
        }</div>
      </div>

      ${
        data.selectedItems && data.selectedItems.length > 0
          ? `
      <div class="field">
        <h3 style="color: #D4AF37; margin-bottom: 15px;">🛒 Selected Items:</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 20px; background-color: #f4f4f4; border-radius: 5px; margin-bottom: 20px">
          ${data.selectedItems
            .map(
              (item) => `
            <div style="flex: 1 1 calc(33% - 20px); padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
              <div style="font-weight: 600; color: #2C1810; font-size: 16px;">${
                item.name
              }</div>
              <div style="color: #555; font-size: 14px;">Quantity: ${
                item.quantity
              }</div>
              <div style="color: #D4AF37; font-weight: 600; font-size: 16px;">$${
                item.price * item.quantity
              }</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      `
          : ""
      }

      ${
        data.customization
          ? `
      <div class="field" style="margin-bottom: 20px;">
        <h3 style="color: #D4AF37; margin-bottom: 15px;">Customization Preferences:</h3>
        ${
          data.customization.message
            ? `<p><strong>Personal Message:</strong> "${data.customization.message}"</p>`
            : ""
        }
        <p><strong>Packaging:</strong> ${data.customization.packaging}</p>
        <p><strong>Delivery:</strong> ${data.customization.delivery}</p>
      </div>
      `
          : ""
      }

      ${
        data.totalPrice
          ? `
      <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <h3 style="color: #D4AF37;">💰 Total Estimated Price: $${data.totalPrice}</h3>
        <p style="font-size: 16px; color: #555;">This is the preliminary estimate based on selected items. Final pricing may vary based on customizations.</p>
      </div>
      `
          : ""
      }

      <div style="background-color: #fffae6; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <h3 style="font-size: 20px; color: #2C1810;">⏰ Action Required</h3>
        <p style="font-size: 16px; color: #555;">Please prepare a detailed quote and respond within 24 hours. Custom builder requests require immediate attention and personalized pricing.</p>
      </div>
    </div>
  </div>
`;

    // Customer email content with enhanced styling
    const customerContent = `
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #fff; padding: 20px; border-radius: 8px;">
      <h2 style="font-size: 22px; color: #2C1810; margin-bottom: 20px;">🎨 Your Custom Creation Awaits!</h2>
      <p style="font-size: 16px; color: #555;">Dear Valued Customer,</p>

      <div class="field" style="margin-bottom: 20px;">
        <h3 style="color: #D4AF37; margin-bottom: 15px;">Thank You for Your Custom Request!</h3>
        <p style="font-size: 16px; color: #555;">We're excited to help you create the perfect custom ${data.category.toLowerCase()} that reflects your unique vision and style. Our team is already working on preparing a detailed quote for your personalized creation.</p>
      </div>

      ${
        data.selectedItems && data.selectedItems.length > 0
          ? `
      <div class="field" style="margin-bottom: 20px;">
        <h3 style="color: #2C1810; margin-bottom: 15px;">🛍️ Your Selected Items:</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 20px; background-color: #f4f4f4">
          ${data.selectedItems
            .map(
              (item) => `
            <div style="flex: 1 1 calc(33% - 20px); padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
              <div style="font-weight: 600; color: #2C1810; font-size: 16px;">${
                item.name
              }</div>
              <div style="color: #555; font-size: 14px;">Quantity: ${
                item.quantity
              }</div>
              <div style="color: #D4AF37; font-weight: 600; font-size: 16px;">$${
                item.price * item.quantity
              }</div>
            </div>
          `
            )
            .join("")}
        </div>

        ${
          data.totalPrice
            ? `
        <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
          <h3 style="color: #D4AF37; font-size: 18px;">💰 Estimated Total: $${data.totalPrice}</h3>
          <p style="font-size: 16px; color: #555;">This is a preliminary estimate. Final pricing will be confirmed in your detailed quote.</p>
        </div>
        `
            : ""
        }
      </div>
      `
          : ""
      }

      ${
        data.customization
          ? `
      <div class="field" style="margin-bottom: 20px;">
        <h3 style="color: #D4AF37; margin-bottom: 15px;">Your Customization Preferences:</h3>
        ${
          data.customization.message
            ? `<p><strong>Personal Message:</strong> "${data.customization.message}"</p>`
            : ""
        }
        <p><strong>Packaging:</strong> ${data.customization.packaging}</p>
        <p><strong>Delivery:</strong> ${data.customization.delivery}</p>
      </div>
      `
          : ""
      }

      <div class="steps-container" style="margin-top: 30px;">
        <h3 style="color: #2C1810; text-align: center; margin-bottom: 30px;">What Happens Next?</h3>
        
        <div class="step" style="margin-bottom: 20px;">
          <div style="font-weight: 600; color: #2C1810; font-size: 20px;">1. Quote Preparation (24 hours)</div>
          <p style="font-size: 16px; color: #555;">Our team will prepare a detailed quote with final pricing, timeline, and any additional options.</p>
        </div>
        
        <div class="step" style="margin-bottom: 20px;">
          <div style="font-weight: 600; color: #2C1810; font-size: 20px;">2. Quote Review</div>
          <p style="font-size: 16px; color: #555;">We'll send you a comprehensive quote via email for your review and approval.</p>
        </div>
        
        <div class="step" style="margin-bottom: 20px;">
          <div style="font-weight: 600; color: #2C1810; font-size: 20px;">3. Creation Process</div>
          <p style="font-size: 16px; color: #555;">Once approved, we'll begin crafting your custom piece with meticulous attention to detail.</p>
        </div>
        
        <div class="step">
          <div style="font-weight: 600; color: #2C1810; font-size: 20px;">4. Quality & Delivery</div>
          <p style="font-size: 16px; color: #555;">Final quality check and careful packaging for delivery to your door.</p>
        </div>
      </div>

      <div class="contact-info" style="margin-top: 30px;">
        <p style="font-size: 16px; color: #555; text-align: center;">We will get in touch with you soon.</p>
      </div>
    </div>
  </div>
`;

    const result = await sendDualEmails(
      data.customerEmail,
      `New Custom Builder Quote Request - ${COMPANY_NAME}`,
      adminContent,
      `Your Custom Quote Request - ${COMPANY_NAME}`,
      customerContent
    );

    if (result.success) {
      return res.json({
        success: true,
        message: "Custom builder quote request emails sent successfully",
      });
    } else {
      throw new Error("Failed to send emails");
    }
  } catch (error) {
    console.error("Error sending custom builder emails:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send custom builder emails",
      error: error.message,
    });
  }
});

module.exports = router;
