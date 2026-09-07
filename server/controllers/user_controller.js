import userService from '../service/user_service.js'

class UserController {

    async registration(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await userService.registration(email, password)
            return res.json(userData)
        } catch (e) {
            return res.status(400).json('Пользователь с таким email уже зарегистрирован')
        }
        
    }

    async login(req, res, next) {
        try {

        } catch (e) {
            console.log(e)
        }
    }

}

export default new UserController()