const { Router } = require("express")
const controller = require("./controller")
const router = Router();

router.get("/", controller.getData);
router.get("/:email",controller.getUserByEmail)
router.post("/",controller.addUser)
router.post("/addDetails",controller.addDetails)
router.get("/getAllDetailsByEmail", controller.getAllDetailsByEmail)
router.get("/getDetailsByDetailId", controller.getDetailsByDetailId)
router.put("/updateDetailsByDetailId", controller.updateDetailsByDetailId)

module.exports = router;