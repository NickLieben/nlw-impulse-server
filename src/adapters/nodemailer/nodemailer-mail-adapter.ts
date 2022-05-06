import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "527497b8426479",
        pass: "acd1e8fe5dd49b"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {

        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Nicolas Lieee <nicolas.liebenberger@gmail.com>',
        subject,
        html: body
    })
    }
}