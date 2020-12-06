// const express = require('express')
// const http = require('http')
// const bodyParser = require('body-parser')
// const cors = require('cors')

// const app = express()

// // Middleware
// app.use(bodyParser.json())
// app.use(cors())

// // Handle production
// if (process.env.NODE_ENV !== 'production') {
//   // Static folder
//   app.use(express.static(`${__dirname}/public/`))

//   // Handle SPA
//   app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/public/index.html`))
// }

// const port = process.env.PORT || 5000

// app.listen(port, () => console.log(`Server started on port: ${port}`))


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const server = require('http').createServer(app)

// Middleware
app.use(bodyParser.json())
app.use(cors())

require('./socket').listen(server)

// Handle production
if (process.env.NODE_ENV !== 'production') {
  // Static folder
  app.use(express.static(`${__dirname}/public/`))

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/public/index.html`))
}

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`Server started on port: ${port}`))
