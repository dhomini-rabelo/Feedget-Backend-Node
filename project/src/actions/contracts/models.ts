import { FeedbackModelDataType } from "../../types/models";

export interface FeedbackModelContractType {
    create: (data: FeedbackModelDataType) => Promise<void>,
    objects: () => Promise<FeedbackModelDataType[]>,
}