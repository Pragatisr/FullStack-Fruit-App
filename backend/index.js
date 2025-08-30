const { router } = require('./routes/user.routes')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://srivastavapragati96:5glB3p2Xq0m8DAgT@eccomerce.2n1wdta.mongodb.net/FruitSellingApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Atlas connected"))
.catch((err) => console.error("MongoDB Atlas connection error:", err));

app.use(router)
app.listen(3001,()=>{
    console.log('server is running on port 3001')
})
