import {Router} from 'express'
import deviceController from '../controllers/device_controller.js'

const deviceRouter = new Router()

deviceRouter.post('/create', deviceController.createDevice)
deviceRouter.get('/', deviceController.getAllDevices)
deviceRouter.get('/:id', deviceController.getOneDevice)
deviceRouter.post('/rate/:id', deviceController.rateDevice)
deviceRouter.delete('/:id', deviceController.deleteDevice)


export default deviceRouter