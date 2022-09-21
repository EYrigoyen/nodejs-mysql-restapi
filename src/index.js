import express from 'express'
import employeesRoute from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

import {PORT} from './config.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', employeesRoute)

app.use((req, res, next) => {
    res.status(404).json({
        message:'endpoint not found'
    })
})

app.listen(PORT)
console.log('Server running on port', PORT)
