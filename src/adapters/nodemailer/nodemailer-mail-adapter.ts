import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "125bff1038f7b0",
    pass: "a5fa3e9a95ec50"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
     from: 'Equipe FeedGet <oi@feedget.com>',
     to: 'Marcelo Candido <marcelo.cansilva@gmail.com>',
     subject,
     html: body,
    });
  }
}