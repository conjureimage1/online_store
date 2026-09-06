import express from 'express'
import 'dotenv/config'
import models from './models/models.js'
import db from './db.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
const start = async () => {
    try {
        await db.authenticate()
        await db.sync()
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()



