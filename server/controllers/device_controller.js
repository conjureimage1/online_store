import deviceService from '../service/device_service.js'
import {v4} from 'uuid'
import path from 'path'

class DeviceController {


    async createDevice(req, res, next) { 
        try {
            const {name, price, typeId, brandId} = req.body
            const {img} = req.files
            const imgName = v4() + ".jpg"
            img.mv(path.resolve('..', 'server', 'static', imgName))
            const device = await deviceService.create(name, imgName, price, typeId, brandId)
            return res.json(device)

        } catch (e) {
            next(e)
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