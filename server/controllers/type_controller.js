import typeService from '../service/type_service.js'

class TypeController {

    async createType(req, res, next) {
        try {
            const {name} = req.body
            const type = await typeService.createType(name)
            return res.json(type)

        } catch (e) {
            console.log(e)
        }
    }
}


export default new TypeController()