export default class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors=[]) {
        super(message)
        this.status = status
        this.errors = errors
    }



    static UnauthorizedError(message='Пользователь не авторизован', errors=[]) {
        return new ApiError(401, message, errors)
    }


    static BadRequest(message='Неккоректный запрос', errors=[]) {
        return new ApiError(400, message, errors)
    }


    static NotFound(message='Не найдено', errors=[]) {
        return new ApiError(404, message, errors)
    }


    static NoAccess(message='Нет доступа', errors=[]) {
        return new ApiError(403, message, errors)
    }
}
