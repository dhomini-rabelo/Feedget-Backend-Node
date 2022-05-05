import { FeedbackModelDataType } from "../../../models";
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
}