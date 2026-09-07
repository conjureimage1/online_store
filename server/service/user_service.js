import models from '../models/models.js'
import bcrypt from 'bcrypt'
import UserDto from '../dtos/user_dto.js'
import tokenService from './token_service.js'

class Userservice {

    async registration(email, password) {
        const candidate = await models.User.findOne({where: {email: email}})
        if (candidate) {
            throw new Error()
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await models.User.create({email: email, password: hashPassword})
        const userDto = new UserDto(user.id, user.email, user.role)
        const tokens = await tokenService.createTokens({...userDto})
        console.log(userDto)
        return {...tokens, user: userDto}
    }

    async login(email, password) {

    }
}


export default new Userservice()