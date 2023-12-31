const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const port = 3001; // or any other port you prefer
require("dotenv").config();

// Enable CORS if needed
app.use(cors({ origin: true, credentials: true }));

// Middleware to parse JSON data
app.use(express.json());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Define the endpoint for sending emails
app.post("/send-mail", (req, res) => {
  const { userName, userEmail, userMessage } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: "ikpashteen1@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${userName}\nEmail: ${userEmail}\nMessage: ${userMessage}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
