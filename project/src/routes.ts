import { SubmitFeedbackUseCase } from "./actions/use-cases/submitFeedback";
import { PrismaFeedbackModel } from "./actions/contracts-implementation/prisma/models";
import { NodemailerMailProvider } from "./interfaces/mail/implementations/nodemailer";
import express from "express"


export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
    const feedbackModel = new PrismaFeedbackModel()
    const mailProvider = new NodemailerMailProvider()
    const action = new SubmitFeedbackUseCase(feedbackModel, mailProvider)

    action.run(req.body)

    return res.status(201).send()// CREATED
})