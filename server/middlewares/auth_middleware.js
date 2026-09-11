import ApiError from '../exceptions/api_errors.js'
import 'dotenv/config'
import tokenService from '../service/token_service.js'

export default async function (req, res, next) {
    if (!req.headers.authorization) {
        next(ApiError.UnauthorizedError())
    }
    const accessToken = req.headers.authorization.split(' ')[1]
    if (!accessToken) {
        next(ApiError.UnauthorizedError())
    }

    const validateToken = await tokenService.validateAccessToken(accessToken)
    if (!validateToken) {
        next(ApiError.UnauthorizedError('Токен не валиден'))
    }

    next()


}