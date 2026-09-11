import {Router} from 'express'
import userController from '../controllers/user_controller.js'
import authMiddleware from '../middlewares/auth_middleware.js'

const userRouter = new Router()

userRouter.post('/registration', userController.registration)
userRouter.post('/login', userController.login)
userRouter.post('/logout', userController.logout)
userRouter.get('/refresh', userController.refresh)
userRouter.get('/', authMiddleware, userController.getAllUsers)


export default userRouter