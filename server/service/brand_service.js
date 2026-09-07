import models from '../models/models.js'

class BrandService {

    async createBrand(name) {
        const brand = await models.Brand.create({
            name: name
        })
        return brand
    }

}


export default new BrandService()
