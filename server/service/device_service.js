import models from '../models/models.js'
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
            throw new Error()
        }
        return device
    }


    async deleteDevice(id) {
        const device = await models.Device.findByPk(id)
        if (!device) {
            throw new Error()
        } 
        await device.destroy()
        return device
    }
}


export default new DeviceService()