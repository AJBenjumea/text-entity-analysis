const fetch = require("node-fetch");
require('dotenv').config();


module.exports = function getEntities(text) {
  let config = {
    "encodingType": "UTF8",
    "document": {
      "type": "PLAIN_TEXT",
      "content": `${text}`
    }
  }

  return fetch(`https://language.googleapis.com/v1/documents:analyzeEntities?key=${process.env.API_KEY}`, {
    method: 'POST',
    body: JSON.stringify(config),
    })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log('Error:', err))

}