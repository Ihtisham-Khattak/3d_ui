const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3001; // or any other port you prefer

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "ihtishamkhattak9504@gmail.com",
    pass: "t1isREjH1133!@#$",
  },
});

// Enable CORS if needed
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware to parse JSON data
app.use(express.json());

// Define the endpoint for sending emails
app.post("/send-email", (req, res) => {
  const { userName, userEmail, userMessage } = req.body;

  const mailOptions = {
    from: "ihtishamkhattak9504@gmail.com",
    to: "recipient-email@example.com",
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
``;
