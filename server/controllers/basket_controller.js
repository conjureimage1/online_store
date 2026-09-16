import basketService from "../service/basket_service.js"

class BasketController {

    async saveToBasket(req, res, next) {
        try {
            const {basketId, deviceId} = req.body
            const basketDevice = await basketService.saveToBasket(basketId, deviceId)

            return res.json(basketDevice)
        } catch (e) {
            next(e)
        }
    }


    async getBasketDevices(req, res, next) {
        try {
            let {basketId, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            const devices = await basketService.getBasketDevices(basketId, limit, offset) 
            return res.json(devices)
        } catch (e) {
            next(e)
        }
    }

    async deleteBasketDevices(req, res, next) {
        try {
            const {basketId, deviceId} = req.query
            const devices = await basketService.deleteBasketDevices(basketId, deviceId)
            return res.json(devices)
        } catch (e) {
            next(e)
        }
    }
}

export default new BasketController()