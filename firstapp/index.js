const express = require("express")
const app = express()

// app is listening on port 3000
app.listen(3000, () => {
    console.log("Hello World!!")
})

// run after the app receives a request
app.use((req, res) => {
    console.log("Request received.")
    res.send("Hi User!!")
})
