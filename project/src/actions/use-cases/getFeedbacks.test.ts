import { GetFeedbacksUseCase } from "./getFeedbacks";

const createFeedbackSpy = jest.fn()
const getFeedbacksSpy = jest.fn()


const action = new GetFeedbacksUseCase(
    { create: createFeedbackSpy, objects: getFeedbacksSpy },
)


describe('Get feedbacks', () => {

    test('action', async () => {
        await expect(action.run()).resolves.not.toThrow()
        expect(getFeedbacksSpy).toHaveBeenCalled()
    })

})