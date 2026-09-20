import {Router} from 'express'
import brandController from '../controllers/brand_controller.js'
import checkRoleMiddleware from '../middlewares/checkrole_middleware.js'

const brandRouter = new Router()

brandRouter.post('/create', checkRoleMiddleware('{"USER","ADMIN"}'), brandController.createBrand)

export default brandRouter
