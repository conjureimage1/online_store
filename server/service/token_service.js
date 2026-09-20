import jwt from 'jsonwebtoken'
import 'dotenv/config'
import models from '../models/models.js'

class TokenService {

    createTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})

        return {accessToken: accessToken, refreshToken: refreshToken}
    }

    async saveToken(userId, refreshToken) {
        const oldToken = await models.RefreshToken.findOne({where: {userId: userId}})
        if (oldToken) {
            await oldToken.destroy()
        }
        const token = await models.RefreshToken.create({userId: userId, token: refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        const token = await models.RefreshToken.findOne({where: {token: refreshToken}})
        await token.destroy()
        return token
    }


    validateRefreshToken(refreshToken) {
        try {
            const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch {
            return null
        }
    }

    validateAccessToken(accessToken) {
        try {
            const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch {
            return null
        }
    }
}

export default new TokenService()