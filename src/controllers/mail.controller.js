import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export const mailController = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_PASS,
  },
});

export async function sendPurchaseConfirmationEmail(req, res) {
  try {
    const result = await mailController.sendMail({
      from: process.env.GOOGLE_EMAIL,
      to: "nachosachetto1998@hotmail.com",
      subject: "Compra Realizada",
      html: `
        <div>
          <h1>Probando Compra</h1>
          <p>Compra Realizada correctamente</p>
        </div>
      `,
    });

    console.log(result);
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
}
