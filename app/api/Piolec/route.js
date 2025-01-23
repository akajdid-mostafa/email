import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name,number,email,entreprise,type ,message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailContent = `
  <html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau contact sur mon site</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        
        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', Arial, sans-serif;
            background-color: #f4f7f9;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #6366f1, #3b82f6);
            color: #ffffff;
            padding: 30px;
            text-align: center;
        }
        .header h2 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .content {
            padding: 30px;
        }
        .detail {
            margin-bottom: 20px;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 15px;
        }
        .detail:last-child {
            border-bottom: none;
        }
        .detail strong {
            color: #4b5563;
            font-weight: 600;
        }
        .message-box {
            background-color: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
        }
        .message-box h3 {
            color: #3b82f6;
            margin-top: 0;
            font-size: 18px;
        }
        .message-content {
            color: #4b5563;
            line-height: 1.6;
        }
        .footer {
            background-color: #f9fafb;
            color: #6b7280;
            text-align: center;
            padding: 20px;
            font-size: 14px;
        }
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Nouveau contact sur mon site</h2>
        </div>
        <div class="content">
            <div class="detail">
                <strong>Nom:</strong> ${name}
            </div>
            <div class="detail">
                <strong>Number:</strong> ${number}
            </div>
             <div class="detail">
                <strong>Email:</strong> ${email}
            </div>
            <div class="detail">
                <strong>Type de person:</strong> ${type}
            </div>
             <div class="detail">
                <strong>Nom entreprise:</strong> ${entreprise}
            </div>
            
            <div class="message-box">
                <h3>Message:</h3>
                <div class="message-content">${message}</div>
            </div>
        </div>
        <div class="footer">
            <p>Cet e-mail a été envoyé à partir du formulaire de contact du site web Piolec</p>
        </div>
    </div>
</body>
</html>
`;
    await transporter.sendMail({
      from: "Form contact Piolec",
      to: ["mostafaakajdid6@gmail.com", "mostafaakajdid2002@gmail.com","piolec21@outlook.com"],  
      subject: "Nouveau formulaire de Piolec",
      html: emailContent,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
