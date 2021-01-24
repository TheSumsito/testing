const express = require('express')
const app = express()

app.get('*', (req, res)=> {
    console.log('prueba')
    res.send({mensaje: 'chanchito feliz'})
})

module.exports = app