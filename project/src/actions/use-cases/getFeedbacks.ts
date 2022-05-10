import { FeedbackModelContractType } from "../contracts/models";



export class GetFeedbacksUseCase {

    constructor(
        private FeedbackModel : FeedbackModelContractType,
    ){}

    run = async () => await this.FeedbackModel.objects()

}