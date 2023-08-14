const express = require('express')
const cors = require('cors')
const { conection } = require('./config/db')
const { userRouter } = require('./routes/user.route')
const { flightRouter } = require('./routes/flight.route')
const { bookingRouter } = require('./routes/booking.route')
require("dotenv").config()

const app = express()

const port = process.env.port || 3000

app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use("/flight", flightRouter)
app.use("/booking", bookingRouter)

app.get('/',(req,res) => {
    res.send("Welcome to the Express server")
})

app.listen(port , async () => {
    try {
        await conection
        console.log("Connected with db")
    } catch (error) {
        console.log("Unable to connect with db")
    }
    console.log("App listening on port  " + port)
})