import tokenService from "../service/token_service.js"
import ApiError from "../exceptions/api_errors.js"

export default function (roles) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
                    next()
            }
            if (!req.headers.authorization) {
                next(ApiError.UnauthorizedError())
            }
            const accessToken = req.headers.authorization.split(' ')[1]
            if (!accessToken) {
                next(ApiError.UnauthorizedError())
            }
            
            const userData = tokenService.validateAccessToken(accessToken)
            if (userData.roles != roles) {
                next(ApiError.UnauthorizedError())
            }


            next()
        }
    }