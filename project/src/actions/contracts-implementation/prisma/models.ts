import { FeedbackModelDataType } from "../../../types/models";
import { FeedbackModelContractType } from "../../contracts/models";
import { prisma } from "../../../prisma";


export class PrismaFeedbackModel implements FeedbackModelContractType {
    async create({ type, comment, screenshot }: FeedbackModelDataType) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }

    objects = async () => {
        const feedbacksData = await prisma.feedback.findMany()
        const feedbacksAsList =  feedbacksData.slice()
        return feedbacksAsList as FeedbackModelDataType[]
    }  

}