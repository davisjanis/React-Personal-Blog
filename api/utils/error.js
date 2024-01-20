// message for custom errors

export const errorHandler = (statusCode, message) => {
    //use JS built-in Error constructor, to create new Error object
    const error = new Error()
    error.statusCode = statusCode
    error.message = message;
    return error;
}