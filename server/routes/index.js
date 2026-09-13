import {Router} from 'express'
import userRouter from './user_routes.js'
import deviceRouter from './device_routes.js'
import brandRouter from './brand_routes.js'
import typeRouter from './type_routes.js'
import basketRouter from './basket_routes.js'
const router = new Router()


router.use('/users', userRouter)
router.use('/devices', deviceRouter)
router.use('/brands', brandRouter)
router.use('/types', typeRouter)
router.use('/basket', basketRouter)



export default router
