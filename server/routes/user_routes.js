import {Router} from 'express'
import userController from '../controllers/user_controller.js'
import authMiddleware from '../middlewares/auth_middleware.js'
import {body} from 'express-validator'

const userRouter = new Router()


//Авторизация
userRouter.post('/registration', 
    body('email').isEmail(), 
    body('password').isLength({min: 3, max: 32}), //FIXME: пароль null при длине > 3
    userController.registration
)
userRouter.post('/login', userController.login)
userRouter.post('/logout', userController.logout)
userRouter.get('/refresh', userController.refresh)
userRouter.get('/', authMiddleware, userController.getAllUsers)


export default userRouter