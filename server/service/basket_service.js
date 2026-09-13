import ApiError from "../exceptions/api_errors.js"
import models from "../models/models.js"

class BasketService {

    async createBasket(userId) {
        const basket = await models.Basket.create({userId})
        return basket
    }


    async saveToBasket(basketId, deviceId) {
        const basketDevice = await models.Basket_Device.create({basketId, deviceId})
        return basketDevice
    }

    async getBasketDevices(basketId) {
        const devices = await models.Basket_Device.findAll({where: {basketId}})

        if (!devices) {
            throw ApiError.BadRequest('Устройства не найдены')
        }
        return devices
    }

    async deleteBasketDevices(basketId, deviceId) { 
        const devices = await models.Basket_Device.destroy({where: {basketId, deviceId}})

        if (!devices) {
            throw ApiError.BadRequest('Устройства не найдены')
        }
        return devices
    }

}


export default new BasketService()