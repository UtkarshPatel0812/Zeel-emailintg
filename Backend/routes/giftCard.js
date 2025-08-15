const express = require("express");
const router = express.Router();
const { sendMultipleEmails } = require("../utils/sendEmail");

const COMPANY_NAME = process.env.COMPANY_NAME || "Luxe Collections";
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || "info@luxecollections.com";

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const giftCardCode =
      "LC" + Math.random().toString(36).substr(2, 9).toUpperCase();

    const adminEmailTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Gift Card Purchase</title>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #D4AF37 0%, #8B7355 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; padding: 12px; background: white; border-radius: 8px; border-left: 4px solid #D4AF37; }
            .field-label { font-weight: bold; color: #2C1810; margin-bottom: 5px; }
            .field-value { color: #5D4E37; }
            .gift-card-code { background: #D4AF37; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #8B7355; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎁 New Gift Card Purchase</h1>
              <p>Luxe Collections - Premium Hampers & Jewelry</p>
            </div>
            <div class="content">
              <div class="gift-card-code">
                Gift Card Code: ${giftCardCode}
              </div>
              
              <div class="field">
                <div class="field-label">Sender Name:</div>
                <div class="field-value">${data.senderName}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Sender Email:</div>
                <div class="field-value">${data.senderEmail}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Recipient Name:</div>
                <div class="field-value">${data.recipientName}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Recipient Email:</div>
                <div class="field-value">${data.recipientEmail}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Amount:</div>
                <div class="field-value">$${data.amount}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Delivery Date:</div>
                <div class="field-value">${
                  data.deliveryDate || "Immediate"
                }</div>
              </div>
              
              <div class="field">
                <div class="field-label">Personal Message:</div>
                <div class="field-value">${
                  data.message || "No message provided"
                }</div>
              </div>
            </div>
            <div class="footer">
              <p>Please process this gift card and ensure it's activated in the system.</p>
              <p>Gift card code: ${giftCardCode}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email template for recipient
    const recipientEmailTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>You've Received a Luxe Collections Gift Card!</title>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #D4AF37 0%, #8B7355 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .gift-card { background: linear-gradient(135deg, #D4AF37 0%, #8B7355 100%); color: white; padding: 30px; border-radius: 15px; text-align: center; margin: 20px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
            .gift-card-amount { font-size: 36px; font-weight: bold; margin: 10px 0; }
            .gift-card-code { background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; font-size: 18px; font-weight: bold; letter-spacing: 2px; margin: 15px 0; }
            .message-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D4AF37; }
            .how-to-use { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #8B7355; font-size: 14px; }
            .cta-button { display: inline-block; background: #2C1810; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 You've Received a Gift!</h1>
              <p>Luxe Collections - Premium Hampers & Jewelry</p>
            </div>
            <div class="content">
              <p>Dear ${data.recipientName},</p>
              
              <div class="message-box">
                <h3 style="color: #D4AF37; margin-bottom: 15px;">A Special Gift Just for You!</h3>
                <p>${
                  data.senderName
                } has sent you a beautiful gift card to Luxe Collections. Get ready to discover our exquisite collection of premium hampers and handcrafted jewelry!</p>
              </div>

              <div class="gift-card">
                <h2 style="margin: 0;">🎁 LUXE COLLECTIONS</h2>
                <div class="gift-card-amount">$${data.amount}</div>
                <p style="margin: 10px 0;">DIGITAL GIFT CARD</p>
                <div class="gift-card-code">${giftCardCode}</div>
                <p style="font-size: 14px; opacity: 0.9;">Never Expires • Valid for All Collections</p>
              </div>

              ${
                data.message
                  ? `
              <div class="message-box">
                <h3 style="color: #D4AF37; margin-bottom: 15px;">Personal Message from ${data.senderName}:</h3>
                <p style="font-style: italic; color: #5D4E37;">"${data.message}"</p>
              </div>
              `
                  : ""
              }

              <div class="how-to-use">
                <h3 style="color: #2C1810; margin-bottom: 15px;">How to Use Your Gift Card:</h3>
                <ol style="color: #5D4E37;">
                  <li>Browse our collections at luxecollections.com</li>
                  <li>Add your favorite items to cart</li>
                  <li>Enter gift card code <strong>${giftCardCode}</strong> at checkout</li>
                  <li>Enjoy your luxury hampers or handcrafted jewelry!</li>
                </ol>
                <p style="color: #8B7355; font-size: 14px; margin-top: 15px;">
                  <strong>Note:</strong> This gift card never expires and can be used for any item in our collection, including custom pieces.
                </p>
              </div>

              <div style="text-align: center;">
                <a href="#" class="cta-button">Start Shopping Now</a>
              </div>

              <div class="message-box">
                <h3 style="color: #D4AF37; margin-bottom: 15px;">Discover Our Collections:</h3>
                <ul style="color: #5D4E37;">
                  <li><strong>🍫 Premium Hampers:</strong> Artisan chocolates and gourmet treats</li>
                  <li><strong>💎 Handcrafted Jewelry:</strong> Elegant pieces for every occasion</li>
                  <li><strong>💍 Engagement Collections:</strong> Perfect for life's special moments</li>
                  <li><strong>🎨 Custom Creations:</strong> Personalized designs made just for you</li>
                </ul>
              </div>
            </div>
            <div class="footer">
              <p>Thank you for choosing Luxe Collections!</p>
              <p>Questions? Contact us at info@luxecollections.com or +1 (234) 567-890</p>
              <p style="margin-top: 15px; font-size: 12px;">
                Gift Card Code: ${giftCardCode} | Amount: $${
      data.amount
    } | Never Expires
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email template for sender confirmation
    const senderEmailTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Gift Card Sent Successfully - Luxe Collections</title>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #D4AF37 0%, #8B7355 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .confirmation-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D4AF37; }
            .gift-details { background: #FEFCF9; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #8B7355; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Gift Card Sent Successfully!</h1>
              <p>Luxe Collections - Premium Hampers & Jewelry</p>
            </div>
            <div class="content">
              <p>Dear ${data.senderName},</p>
              
              <div class="confirmation-box">
                <h3 style="color: #D4AF37; margin-bottom: 15px;">Your Gift Has Been Delivered!</h3>
                <p>Your digital gift card has been successfully sent to ${
                  data.recipientName
                } at ${data.recipientEmail}. They'll receive it ${
      data.deliveryDate ? `on ${data.deliveryDate}` : "immediately"
    } with your personal message.</p>
              </div>

              <div class="gift-details">
                <h3 style="color: #2C1810; margin-bottom: 15px;">Gift Card Details:</h3>
                <p><strong>Recipient:</strong> ${data.recipientName}</p>
                <p><strong>Amount:</strong> $${data.amount}</p>
                <p><strong>Gift Card Code:</strong> ${giftCardCode}</p>
                <p><strong>Delivery:</strong> ${
                  data.deliveryDate || "Immediate"
                }</p>
                ${
                  data.message
                    ? `<p><strong>Your Message:</strong> "${data.message}"</p>`
                    : ""
                }
              </div>

              <div class="confirmation-box">
                <h3 style="color: #D4AF37; margin-bottom: 15px;">What Happens Next?</h3>
                <p>${
                  data.recipientName
                } will receive a beautifully designed email with their gift card and instructions on how to use it. The gift card never expires and can be used for any item in our collection.</p>
              </div>

              <div class="confirmation-box">
                <p><strong>Need to send another gift card?</strong> Visit our website anytime to send more digital gifts to your loved ones.</p>
              </div>
            </div>
            <div class="footer">
              <p>Thank you for choosing Luxe Collections for your gift giving!</p>
              <p>Creating extraordinary moments, one gift at a time.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const result = await sendMultipleEmails([
      {
        to: "admin@luxecollections.com",
        subject: `New Gift Card Purchase - ${COMPANY_NAME}`,
        html: adminContent,
      },
      {
        to: data.recipientEmail,
        subject: `🎁 You've Received a Gift Card - ${COMPANY_NAME}`,
        html: recipientContent,
      },
      {
        to: data.senderEmail,
        subject: `✅ Your Gift Has Been Sent - ${COMPANY_NAME}`,
        html: senderContent,
      },
    ]);

    if (result.success) {
      return res.json({
        success: true,
        message: "Gift card emails sent successfully",
        giftCardCode,
      });
    } else {
      throw new Error("Failed to send one or more emails");
    }
  } catch (error) {
    console.error("Gift Card Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send gift card emails",
      error: error.message,
    });
  }
});

module.exports = router;
