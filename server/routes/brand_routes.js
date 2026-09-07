import {Router} from 'express'
import brandController from '../controllers/brand_controller.js'

const brandRouter = new Router()

brandRouter.post('/create', brandController.createBrand)

export default brandRouter
