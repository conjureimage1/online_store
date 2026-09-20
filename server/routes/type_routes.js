import {Router} from 'express'
import typeController from '../controllers/type_controller.js'
import checkRoleMiddleware from '../middlewares/checkrole_middleware.js'

const typeRouter = new Router()

typeRouter.post('/create', checkRoleMiddleware('{"USER","ADMIN"}'), typeController.createType)


export default typeRouter