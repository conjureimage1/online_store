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


    async getBasketDevices(req, res, next) { //TODO: сделать фильтр поиска
        try {
            const {basketId} = req.query
            const devices = await basketService.getBasketDevices(basketId)
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