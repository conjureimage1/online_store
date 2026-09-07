import jwt from 'jsonwebtoken'
import 'dotenv/config'

class TokenService {

    async createTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET)
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET)

        return {accessToken: accessToken, refreshToken: refreshToken}
    }

    async saveToken(refreshToken) {

    }
}

export default new TokenService()