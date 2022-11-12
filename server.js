const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Старт Manager")
})

function keepAlive() {
  server.listen(5000, () => {
    console.log("Сайт готов")
  })
}

module.exports = keepAlive