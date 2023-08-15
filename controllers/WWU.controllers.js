import { createTransport } from 'nodemailer';

async function enviarEmail({ subject, text, toEmail }) {
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.MAIL,
            pass: process.env.MAIL_PASSWORD
        }
    };

    const transporter = createTransport(config);

    const message = {
        from: process.env.MAIL,
        to: process.env.MAIL,
        subject,
        text
    };

    return await transporter.sendMail(message);
}

export default enviarEmail