const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/email/contact", require("./routes/contact"));
app.use("/api/email/custom-builder", require("./routes/customBuilder"));
app.use("/api/email/newsletter", require("./routes/newsLetter"));
app.use("/api/email/gift-card", require("./routes/giftCard"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
