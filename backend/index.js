const { router } = require('./routes/user.routes')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Atlas connected"))
.catch((err) => console.error("MongoDB Atlas connection error:", err));

app.use(router)
app.listen(process.env.PORT,()=>{
    console.log('server is running on port 3001')
})
