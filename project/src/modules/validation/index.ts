import { requiredErrorMessage } from "./messages"
import { feedbackErrorType } from "./types"



export function validateFeedback(data: any){
    const errors: feedbackErrorType = {}

    if (!data.type) {
        errors.type = requiredErrorMessage
    }
    
    if (!data.comment) {
        errors.comment = requiredErrorMessage
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0 ? true : false
    }
}