import { SubmitFeedbackUseCase } from "./actions/use-cases/submitFeedback";
import { PrismaFeedbackModel } from "./actions/contracts-implementation/prisma/models";
import { NodemailerMailProvider } from "./interfaces/mail/implementations/nodemailer";
import { validateFeedback } from "./modules/validation";
import express from "express"


export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
    const process = validateFeedback(req.body)
    if (!process.isValid) return res.status(400).send(process.errors) // 400 - BAD REQUEST

    const feedbackModel = new PrismaFeedbackModel()
    const mailProvider = new NodemailerMailProvider()
    const action = new SubmitFeedbackUseCase(feedbackModel, mailProvider)

    action.run(req.body)

    return res.status(201).send()// CREATED
})


routes.get('', (req, res) => {
    return res.send({
        'aboutProject': 'https://github.com/dhomini-rabelo/Feedget-Backend-Node',
        'routesGET': [
            '/',
        ],
        'routesPOST': [
            '/feedbacks',
        ],
    })
})