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

    async getDevices(id=null, typeId=null, brandId=null, limit=null, offset=null) {
        let devices

        if (id) {
            devices = await models.Device.findAndCountAll({where: {id}})
        }

        if (typeId && !brandId) {
            devices = await models.Device.findAndCountAll({where: {typeId}, limit, offset})
        }

         if (!typeId && brandId) {
            devices = await models.Device.findAndCountAll({where: {brandId}, limit, offset})
        }

         if (typeId && brandId) {
            devices = await models.Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }

        if (devices.count == 0) {
            throw ApiError.NotFound('Устройства не найдены')
        }

        return devices.rows
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