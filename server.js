const express = require('express')

app = express()

//import cors here


const PORT = 3001

//DB here



//app.use middleware here
app.use(express.json())
app.use(express.urlencoded({extended: true}))




//routes
app.use("/data", routes.data)



//listener

app.listen(PORT, () => {
    console.log('listening to port', PORT)
})