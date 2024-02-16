const { Router } = require("express")
const controller = require("./controller")

const router = Router();

router.get("/", controller.getData);
router.get("/:email",controller.getUserByEmail)
router.post("/",controller.addUser)



module.exports = router;