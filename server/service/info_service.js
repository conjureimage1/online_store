import models from "../models/models.js"

class InfoService {

    createDeviceInfo(info, deviceId) {
        info = JSON.parse(info)
        info.forEach(i => {
            models.Device_info.create({title: i.title, description: i.description, deviceId})
        });
    }
}


export default new InfoService()