import deviceService from '../service/device_service.js'


class DeviceController {


    async createDevice(req, res, next) { //TODO: добавить работу с изображением
        try {
            const {name, img, price, typeId, brandId} = req.body
            const device = await deviceService.create(name, img, price, typeId, brandId)
            return res.json(device)

        } catch (e) {
            console.log(e)
        }
    }


    async getAllDevices(req, res, next) {
        try {
            const devices = await deviceService.getAllDevices()
            return res.json(devices)
        } catch (e) {
            return res.status(400).json(e)
        }
    }


    async getOneDevice(req, res, next) {
        try {
            const id = req.params.id
            const device = await deviceService.getOneDevice(id)
            return res.json(device)
        } catch (e) {
            return res.status(404).json('Пользователь с таким id не найден')
        }
    }


    async deleteDevice(req, res, next) {
        try {
            const id = req.params.id
            const device = await deviceService.deleteDevice(id)
            return res.json(device)
        } catch (e) {
            return res.status(404).json('Пользователь с таким id не найден')
        }
    }


    async rateDevice(req, res, next) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
}

export default new DeviceController()