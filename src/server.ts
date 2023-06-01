import express from 'express'

const app = express()

app.get("/", (req, res) => {
    return res.json({message: "This is a message from the Back-end!"})
})

app.listen(3333, () => {
    console.log("The server is listening on port 3333")
})