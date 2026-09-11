import express from 'express'
import 'dotenv/config'
import db from './db.js'
import router from './routes/index.js'
import cors from 'cors'
import errorMiddleware from './middlewares/error_middleware.js'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import path from 'path'


const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static(path.resolve('.', 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorMiddleware)


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



