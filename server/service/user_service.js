import models from '../models/models.js'
import bcrypt from 'bcrypt'
import UserDto from '../dtos/user_dto.js'
import tokenService from './token_service.js'
import ApiError from '../exceptions/api_errors.js'

class Userservice {

    async registration(email, password) {
        const candidate = await models.User.findOne({where: {email: email}})
        if (candidate) {
            throw ApiError.BadRequest('Пользователь с таким email уже зарегистрирован')
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await models.User.create({email: email, password: hashPassword})

        const userData = await this.createUserData(user)
        return userData
    }

    async login(email, password) {
        const user = await models.User.findOne({where: {email: email}})
        if (!user) {
            throw ApiError.BadRequest('Пользователь не зарегестрирован')
        }
            const ValidatePassword = await bcrypt.compare(password, user.password)

        if (!ValidatePassword) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        
        const userData = await this.createUserData(user)
        return userData
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    } 

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }

        const ValidateToken = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await models.RefreshToken.findOne({where: {token: refreshToken}})

        if (!ValidateToken || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await models.User.findByPk(ValidateToken.id)

        const userData = await this.createUserData(user)
        return userData

    }

    async getAllUsers() {
        return models.User.findAll()
    }


    async createUserData(user) {
        const userDto = new UserDto(user.id, user.email, user.role) 
        const tokens = tokenService.createTokens({...userDto})
        const saveToken = await tokenService.saveToken(user.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }
}


export default new Userservice()