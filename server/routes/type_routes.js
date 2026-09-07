import {Router} from 'express'
import typeController from '../controllers/type_controller.js'

const typeRouter = new Router()

typeRouter.post('/create', typeController.createType)


export default typeRouter