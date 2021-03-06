import { FeedbackModelContractType } from "../contracts/models";
import { FeedbackModelDataType } from "../../types/models";
import { MailInterface } from "../../interfaces/mail/interface";


export class SubmitFeedbackUseCase {

    constructor(
        private FeedbackModel : FeedbackModelContractType,
        private mailProvider: MailInterface,
    ){}
    
    async run(body: FeedbackModelDataType) {
        await this.FeedbackModel.create(body)
        await this.mailProvider.send({
            subject: 'Novo feedback',
            body: [
                '<div>',
                '<h1>Dados do novo feedback</h1>',
                `<p>Tipo: ${body.type}</p>`,
                `<p>Comentário: ${body.comment}</p>`,
                body.screenshot ? `<img src="${body.screenshot}" style="max-width: 100%;" >` : '',
                '</div>',
            ].join('\n')
        })
    }
}