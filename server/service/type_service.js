import models from '../models/models.js'

class TypeService {

    async createType(name) {
        const type = await models.Type.create({
            name: name
        })
        return type
    }
}


export default new TypeService()