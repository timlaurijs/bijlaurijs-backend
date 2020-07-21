require("dotenv").config()
const express = require("express")
const corsMiddleWare = require("cors")
const { PORT } = require("./config/constants")
const menuRouter = require("./routers/menu")

const app = express()

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

app.use("/menus", menuRouter)
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
