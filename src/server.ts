import express from 'express'

const app = express()

app.listen(3333, () => {
    console.log("The server is listenin on port 3333")
})