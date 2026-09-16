import deviceService from '../service/device_service.js'
import ratingService from '../service/rating_service.js'
import {v4} from 'uuid'
import path from 'path'
import infoService from '../service/info_service.js'

class DeviceController {


    async createDevice(req, res, next) { 
        try {
            let {name, price, typeId, brandId, info} = req.body
            const {img} = req.files
            const imgName = v4() + ".jpg"
            img.mv(path.resolve('..', 'server', 'static', imgName))
            const device = await deviceService.create(name, imgName, price, typeId, brandId)

            if (info) {
                infoService.createDeviceInfo(info, device.id)
            }
            
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

     async getOneDevice(req, res, next) {
        try {
            const {id} = req.params
            const device = await deviceService.getOneDevice(id)
            return res.json(device)
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
            const {rating} = req.body
            const deviceId = req.params.id
            const {userId} = req.query
            const updatedDevice = await ratingService.rateDevice(rating, deviceId, userId)
            return res.json(updatedDevice)
        } catch (e) {
            next(e)
        }
    }

}

export default new DeviceController()