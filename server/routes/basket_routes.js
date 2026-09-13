import {Router} from 'express'
import basketController from '../controllers/basket_controller.js'


const basketRouter = new Router()

basketRouter.post('/', basketController.saveToBasket)
basketRouter.get('/', basketController.getBasketDevices)
basketRouter.delete('/', basketController.deleteBasketDevices)





export default basketRouter