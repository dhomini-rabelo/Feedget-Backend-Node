import { MailInterface, SendEmailDataType } from "../interface"
import nodemailer from "nodemailer"
require('dotenv').config();


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD
    }
})


export class NodemailerMailProvider implements MailInterface {
    async send ({ subject, body }: SendEmailDataType) {
        await transport.sendMail({
            from: 'Feedget <feedget@contact.com>',
            to: 'Fael <dhominirabelo@gmail.com>',
            subject,
            html: body,
        })
    }
}