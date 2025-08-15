const express = require("express");
const router = express.Router();
const { sendDualEmails } = require("../utils/sendEmail");

const COMPANY_NAME = process.env.COMPANY_NAME || "Luxe Collections";

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    // Admin email content with enhanced styling
    const adminContent = `
      <div class="content-title">⚡ Priority Custom Builder Request</div>
      <div class="content-text">A new custom builder quote request has been submitted and requires immediate attention.</div>
      
      <div class="field-container">
        <div class="field-row">
          <div class="field-label">Customer Name</div>
          <div class="field-value">${data.customerName || "Not provided"}</div>
        </div>
        <div class="field-row">
          <div class="field-label">Email Address</div>
          <div class="field-value"><a href="mailto:${data.customerEmail}">${data.customerEmail || "Not provided"}</a></div>
        </div>
        <div class="field-row">
          <div class="field-label">Category</div>
          <div class="field-value">${data.category}</div>
        </div>
      </div>
      
      ${data.selectedItems && data.selectedItems.length > 0 ? `
      <div class="field-container">
        <div class="field-label" style="margin-bottom: 15px; font-size: 16px;">🛒 Selected Items</div>
        ${data.selectedItems.map(item => `
        <div class="field-row">
          <div class="field-label">${item.name}</div>
          <div class="field-value">Qty: ${item.quantity} × $${item.price} = $${item.price * item.quantity}</div>
        </div>
        `).join('')}
      </div>
      ` : ''}
      
      ${data.customization ? `
      <div class="field-container">
        <div class="field-label" style="margin-bottom: 15px; font-size: 16px;">🎨 Customization Preferences</div>
        ${data.customization.message ? `
        <div class="field-row">
          <div class="field-label">Personal Message</div>
          <div class="field-value">"${data.customization.message}"</div>
        </div>
        ` : ''}
        <div class="field-row">
          <div class="field-label">Packaging</div>
          <div class="field-value">${data.customization.packaging}</div>
        </div>
        <div class="field-row">
          <div class="field-label">Delivery</div>
          <div class="field-value">${data.customization.delivery}</div>
        </div>
      </div>
      ` : ''}
      
      ${data.totalPrice ? `
      <div class="highlight-box">
        <div class="highlight-title">💰 Estimated Total: $${data.totalPrice}</div>
        <div class="highlight-text">
          This is a preliminary estimate. Final pricing may vary based on customizations and material choices.
        </div>
      </div>
      ` : ''}
      
      <div class="highlight-box" style="border-color: #ff6b6b; background: linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%);">
        <div class="highlight-title" style="color: #dc2626;">⏰ Urgent Action Required</div>
        <div class="highlight-text" style="color: #7f1d1d;">
          Please prepare a detailed quote and respond within 24 hours. Custom requests require immediate attention and personalized pricing.
        </div>
      </div>
`;

    // Customer email content with enhanced styling
    const customerContent = `
      <div class="content-title">🎨 Your Custom Creation Awaits!</div>
      <div class="content-text">
        Thank you for your custom ${data.category.toLowerCase()} request! We're excited to help you create 
        something truly special that reflects your unique vision and style.
      </div>
      
      ${data.selectedItems && data.selectedItems.length > 0 ? `
      <div class="field-container">
        <div class="field-label" style="margin-bottom: 15px; font-size: 16px;">🛍️ Your Selected Items</div>
        ${data.selectedItems.map(item => `
        <div class="field-row">
          <div class="field-label">${item.name}</div>
          <div class="field-value">Qty: ${item.quantity} × $${item.price} = $${item.price * item.quantity}</div>
        </div>
        `).join('')}
      </div>
      ` : ''}
      
      ${data.customization ? `
      <div class="field-container">
        <div class="field-label" style="margin-bottom: 15px; font-size: 16px;">🎨 Your Customization Preferences</div>
        ${data.customization.message ? `
        <div class="field-row">
          <div class="field-label">Personal Message</div>
          <div class="field-value">"${data.customization.message}"</div>
        </div>
        ` : ''}
        <div class="field-row">
          <div class="field-label">Packaging</div>
          <div class="field-value">${data.customization.packaging}</div>
        </div>
        <div class="field-row">
          <div class="field-label">Delivery</div>
          <div class="field-value">${data.customization.delivery}</div>
        </div>
      </div>
      ` : ''}
      
      ${data.totalPrice ? `
      <div class="highlight-box">
        <div class="highlight-title">💰 Estimated Total: $${data.totalPrice}</div>
        <div class="highlight-text">
          This is a preliminary estimate. Final pricing will be confirmed in your detailed quote.
        </div>
      </div>
      ` : ''}
      
      <div class="steps-container">
        <div class="content-text" style="text-align: center; font-weight: 600; margin-bottom: 20px;">What Happens Next?</div>
        
        <div class="step-item">
          <div class="step-number">Step 1</div>
          <div class="step-title">Quote Preparation (24 hours)</div>
          <div class="step-description">Our team prepares a detailed quote with final pricing and timeline</div>
        </div>
        
        <div class="step-item">
          <div class="step-number">Step 2</div>
          <div class="step-title">Quote Review & Approval</div>
          <div class="step-description">We send you a comprehensive quote for your review and approval</div>
        </div>
        
        <div class="step-item">
          <div class="step-number">Step 3</div>
          <div class="step-title">Creation Process</div>
          <div class="step-description">Once approved, we begin crafting your custom piece with meticulous attention</div>
        </div>
        
        <div class="step-item">
          <div class="step-number">Step 4</div>
          <div class="step-title">Quality & Delivery</div>
          <div class="step-description">Final quality check and careful packaging for delivery to your door</div>
        </div>
      </div>
      
      <div style="text-align: center;">
        <a href="${SITE_URL}" class="btn-primary">Visit Our Website</a>
      </div>
  }
}
)