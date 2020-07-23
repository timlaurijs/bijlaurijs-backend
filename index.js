require("dotenv").config()
const express = require("express")
const loggerMiddleWare = require("morgan")
const corsMiddleWare = require("cors")
const { PORT } = require("./config/constants")
const menuRouter = require("./routers/menu")
const authRouter = require("./routers/auth")

const app = express()

/**
 * morgan:
 *
 * simple logging middleware so you can see
 * what happened to your request
 *
 * example:
 *
 * METHOD   PATH        STATUS  RESPONSE_TIME   - Content-Length
 *
 * GET      /           200     1.807 ms        - 15
 * POST     /echo       200     10.251 ms       - 26
 * POST     /puppies    404     1.027 ms        - 147
 *
 * github: https://github.com/expressjs/morgan
 *
 */

app.use(loggerMiddleWare("dev"))

/**
 *
 * express.json():
 * be able to read request bodies of JSON requests
 * a.k.a. body-parser
 * Needed to be able to POST / PUT / PATCH
 *
 * docs: https://expressjs.com/en/api.html#express.json
 *
 */

const bodyParserMiddleWare = express.json()
app.use(bodyParserMiddleWare)

/**
 *
 * cors middleware:
 *
 * Since our api is hosted on a different domain than our client
 * we are are doing "Cross Origin Resource Sharing" (cors)
 * Cross origin resource sharing is disabled by express by default
 * for safety reasons (should everybody be able to use your api, I don't think so!)
 *
 * We are configuring cors to accept all incoming requests
 * If you want to limit this, you can look into "white listing" only certain domains
 *
 * docs: https://expressjs.com/en/resources/middleware/cors.html
 *
 */

app.use(corsMiddleWare())

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY))
  })
}

// GET endpoint for testing purposes, can be removed
app.get("/", (req, res) => {
  res.send("Hi from express")
})

app.use("/", authRouter)
app.use("/menus", menuRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
