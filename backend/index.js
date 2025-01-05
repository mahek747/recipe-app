const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectdb")
const cors=require("cors")

const PORT=process.env.PORT || 3000
connectDb()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/",require("./routes/user.route"))
app.use("/recipe",require("./routes/recipe.route"))

app.listen(PORT,(err)=>{
    console.log(`server is listening on port ${PORT}`)
})