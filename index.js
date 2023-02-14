const express = require('express')
const app = express()
const cron = require('node-cron')

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.json("Hello, World")
})

cron.schedule('* * * * *', (now) => {
    console.log('Run task every minute ' + now);
});

app.listen(PORT, () => {
    console.log("Server running port " + PORT);
})