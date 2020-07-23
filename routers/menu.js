const { Router } = require("express")
const Image = require("../models/").image
const Menu = require("../models/").menu

const router = new Router()

router.get("/", async (req, res) => {
  const menuItems = await Menu.findAndCountAll({
    include: Image,
    order: [["id", "ASC"]],
  })
  res.status(200).send({ message: "ok", menuItems })
})

module.exports = router
