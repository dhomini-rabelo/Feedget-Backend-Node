export interface SendEmailDataType {
    subject: string,
    body: string
}

export interface MailInterface {
    send: (data: SendEmailDataType) => Promise<void>
}