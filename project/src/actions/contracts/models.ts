import { FeedbackModelDataType } from "../../models";

export interface FeedbackModelContractType {
    create: (data: FeedbackModelDataType) => Promise<void>,
}