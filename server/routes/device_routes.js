import {Router} from 'express'
import deviceController from '../controllers/device_controller.js'
import authMiddleware from '../middlewares/auth_middleware.js'
import checkRoleMiddleware from '../middlewares/checkrole_middleware.js'

const deviceRouter = new Router()

deviceRouter.post('/create', checkRoleMiddleware('{"USER","ADMIN"}'), deviceController.createDevice)
deviceRouter.get('/', deviceController.getDevices)
deviceRouter.get('/:id', deviceController.getOneDevice)
deviceRouter.post('/:id/rate', authMiddleware,  deviceController.rateDevice)
deviceRouter.delete('/:id', checkRoleMiddleware('{"USER","ADMIN"}'), deviceController.deleteDevice)


export default deviceRouter