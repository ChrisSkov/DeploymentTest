module.exports = {
  "openapi": "3.0.1",
  info: {
    version: '1.0.0',
    title: 'Going Ham Dev',
    description: 'my shitty attempt at a web page',
    "contact": {
      "name": "Chris Skov",
      "email": "cph-cs342@cphbusiness.dk"
    },
  },
  servers: [
    { url: "http://localhost:3333", description: "local dev server" }
  ]
}