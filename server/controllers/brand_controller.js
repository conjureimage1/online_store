import brandService from '../service/brand_service.js'

class BrandController {

    async createBrand(req, res, next) {
        try {
            const {name} = req.body
            const brand = await brandService.createBrand(name)
            return res.json(brand)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new BrandController()