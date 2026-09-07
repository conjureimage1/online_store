import express from 'express'
import 'dotenv/config'
import db from './db.js'
import router from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use('/api', router)

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



