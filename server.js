const express = require('express')
const gun = require('gun')
const app = express()
const port = 3040
app.use(gun.serve)
const server = app.listen(port , () =>{   
    console.log(listening on port ${port})
})

gun({ web : server});
