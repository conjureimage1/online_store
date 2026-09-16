import {Router} from 'express'
import basketController from '../controllers/basket_controller.js'
import authMiddleware from '../middlewares/auth_middleware.js'


const basketRouter = new Router()

basketRouter.post('/', authMiddleware, basketController.saveToBasket)
basketRouter.get('/', authMiddleware, basketController.getBasketDevices)
basketRouter.delete('/', authMiddleware,basketController.deleteBasketDevices)





export default basketRouter