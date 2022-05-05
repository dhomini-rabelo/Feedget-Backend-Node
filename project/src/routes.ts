import { prisma } from "./prisma"
import express from "express"
import nodemailer from "nodemailer"
require('dotenv').config();


export const routes = express.Router()



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD
    }
});

routes.get('/', (req, res) => res.send({'oi': 'oi'}))

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    await transport.sendMail({
        from: 'Feedget <feedget@contact.com>',
        to: 'Fael <dhominirabelo@gmail.com>',
        subject: 'Novo feedback',
        html: [
            '<div>',
            '<h1>Dados do novo feedback</h1>',
            `<p>Tipo: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `<p>Screenshot: ${screenshot}</p>`,
            '</div>',
        ].join('\n')
    })
    
    return res.status(201).json(feedback) // CREATED
})