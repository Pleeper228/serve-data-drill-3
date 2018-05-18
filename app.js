const express = require('express')
const cors = require('cors')

const data = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Zephyr",
    homeTown: "Seattle"
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Yellow",
    homeTown: "Vancouver"
  },
  {
    id: 3,
    firstName: "Claire",
    lastName: "Xylitol",
    homeTown: "Toledo"
  },
  {
    id: 4,
    firstName: "Daniel",
    lastName: "Winston",
    homeTown: "Toledo"
  },
  {
    id: 5,
    firstName: "Edina",
    lastName: "Veritas",
    homeTown: "Wichita"
  }
]

let port = process.env.PORT || 3000

function getId(data, id) {
  return data.filter(result => result.id == id)
}

const app = express()
app.use(cors())

app.get('/', (request, response) => {
  response.json({data})
})

app.get('/:id', (request, response) => {
  var result = getId(data, request.params.id)
  if (!result[0]) {
    response.status(404).json({
      'error': {
        'message': 'No record found!'
      }
    })
  } else {
    response.json({data: result})
  }
})

app.listen(port)
