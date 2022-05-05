import { validateFeedback } from "../../modules/validation"
import { requiredErrorMessage } from "../../modules/validation/messages"
import { SubmitFeedbackUseCase } from "./submitFeedback"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()


const action = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { send: sendMailSpy }
)

describe('Submit feedback', () => {

    test('action operation success', async () => {
        await expect(action.run({
            type: "BUG",
            comment: "test",
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })


    it('should no be able to create a feedback without type', () => {
        const process = validateFeedback({
            comment: "test",
        })
        expect(process).toStrictEqual({
            errors: {type: requiredErrorMessage},
            isValid: false
        })
    })

    it('should no be able to create a feedback with null type', () => {
        const process = validateFeedback({
            type: "",
            comment: "test",
        })
        expect(process).toStrictEqual({
            errors: {type: requiredErrorMessage},
            isValid: false
        })
    })
    
    it('should no be able to create a feedback without comment', () => {
        const process = validateFeedback({
            type: "BUG",
        })
        expect(process).toStrictEqual({
            errors: {comment: requiredErrorMessage},
            isValid: false
        })
    })

    it('should no be able to create a feedback with null comment', () => {
        const process = validateFeedback({
            type: "BUG",
            comment: "",
        })
        expect(process).toStrictEqual({
            errors: {comment: requiredErrorMessage},
            isValid: false
        })
    })

    it('should no be able to create a feedback without comment and type', () => {
        const process = validateFeedback({})
        expect(process).toStrictEqual({
            errors: {comment: requiredErrorMessage, type: requiredErrorMessage},
            isValid: false
        })
    })

    it('should no be able to create a feedback with null comment and null type', async () => {
        const process = validateFeedback({ type: "", comment: ""})
        expect(process).toStrictEqual({
            errors: {comment: requiredErrorMessage, type: requiredErrorMessage},
            isValid: false
        })
    })

    test('correct feedback data', () => {
        const process = validateFeedback({ type: "BUG", comment: "test"})
        expect(process).toStrictEqual({
            errors: {},
            isValid: true
        })
    })

})