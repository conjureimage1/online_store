import deviceService from '../service/device_service.js'
import {v4} from 'uuid'
import path from 'path'
import ApiError from '../exceptions/api_errors.js'

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


    async getDevices(req, res, next) {
        try {
            let {id, typeId, brandId, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            const devices = await deviceService.getDevices(id, typeId, brandId, limit, offset)

            return res.json(devices)
        } catch (e) {
            next(e)
        }
    }


    async deleteDevice(req, res, next) {
        try {
            const id = req.params.id
            const device = await deviceService.deleteDevice(id)
            return res.json(device)
        } catch (e) {
            next(e)
        }
    }


    async rateDevice(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
}

export default new DeviceController()