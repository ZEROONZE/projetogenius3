const express =  require('express')
const server = express()


server.listen(3001, () => { 
console.log('servidor em http://localhost:3001')
console.log('Delisgar em ctrl + c')
}
)