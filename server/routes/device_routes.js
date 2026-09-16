import {Router} from 'express'
import deviceController from '../controllers/device_controller.js'
import authMiddleware from '../middlewares/auth_middleware.js'

const deviceRouter = new Router()

deviceRouter.post('/create', deviceController.createDevice)
deviceRouter.get('/', deviceController.getDevices)
deviceRouter.get('/:id', deviceController.getOneDevice)
deviceRouter.post('/:id/rate', authMiddleware,  deviceController.rateDevice)
deviceRouter.delete('/:id', deviceController.deleteDevice)


export default deviceRouter