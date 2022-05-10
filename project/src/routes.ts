import { SubmitFeedbackUseCase } from "./actions/use-cases/submitFeedback";
import { PrismaFeedbackModel } from "./actions/contracts-implementation/prisma/models";
import { NodemailerMailProvider } from "./interfaces/mail/implementations/nodemailer";
import { validateFeedback } from "./modules/validation";
import express from "express"
import { GetFeedbacksUseCase } from "./actions/use-cases/getFeedbacks";
import { feedbackModel } from "./models";


export const routes = express.Router()


routes.get('', (req, res) => {
    return res.send({
        
        'aboutProject': 'https://github.com/dhomini-rabelo/Feedget-Backend-Node',
        
        'routes': {
            'GET': [
                '/',
                '/feedbacks',
            ],
            'POST': [
                '/feedbacks',
            ],
        }

    })
})


routes.get('/feedbacks', async (req, res) => {
    const action = new GetFeedbacksUseCase(feedbackModel)
    const feedbacks = await action.run()
    return res.send(feedbacks)
})

routes.post('/feedbacks', async (req, res) => {
    const validation = validateFeedback(req.body)
    if (!validation.isValid) return res.status(400).send(validation.errors) // 400 - BAD REQUEST

    
    const mailProvider = new NodemailerMailProvider()
    const action = new SubmitFeedbackUseCase(feedbackModel, mailProvider)

    action.run(req.body)

    return res.status(201).send()// CREATED
})