const express = require("express")
const router = require("./router")
const swaggerUi = require("swagger-ui-express")
const swaggerdocument = require("../swagger.json")
const app = express()

app.use(express.json())
app.use(router)
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerdocument))

module.exports = app;