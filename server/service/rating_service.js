import models from "../models/models.js"
import ApiError from "../exceptions/api_errors.js"

class RatingService {

    async rateDevice(rating, deviceId, userId) {

        if (rating < 0 || rating > 10) {
            throw ApiError.BadRequest('Неккоректное значение рейтинга')
        }

        const device = await models.Device.findByPk(deviceId)
        if (!device) {
            throw ApiError.BadRequest()
        }

        const checkUser = await models.Rating.findAll({where: {userId: userId}})
        if (checkUser) {
            throw ApiError.BadRequest('Товар уже оценен')
        }
        
        const rate = await models.Rating.create({rate: rating, deviceId: deviceId, userId: userId})
        device.rating += Number(rating)
        await device.save()
        
        return device
    }
}



export default new RatingService()