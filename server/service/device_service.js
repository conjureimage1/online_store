import models from '../models/models.js'
import ApiError from '../exceptions/api_errors.js'
class DeviceService {

    async create(name, img, price, typeId, brandId) {
        const device = await models.Device.create({
            name: name,
            img: img,
            price: price,
            typeId: typeId,
            brandId: brandId
        })
        return device
    }

    async getAllDevices() {
        const devices = await models.Device.findAll()
        return devices
    }


    async getOneDevice(id) {
        const device = await models.Device.findByPk(id)
        if (!device) {
            throw ApiError.NotFound('Устройство не найдено')
        }
        return device
    }


    async deleteDevice(id) {
        const device = await models.Device.findByPk(id)
        if (!device) {
            throw ApiError.NotFound('Устройство не найдено')
        } 
        await device.destroy()
        return device
    }
}


export default new DeviceService()