const { Router } = require("express")
const controller = require("./controller")
const router = Router();

router.get("/", controller.getData);
router.post("/",controller.addUser);
router.get("/getUserByEmail",controller.getUserByEmail);
router.get("/getAllDetailsByEmail", controller.getAllDetailsByEmail);
router.post("/addDetails",controller.addDetails);
router.get("/getDetailsByDetailId", controller.getDetailsByDetailId);
router.post("/updateDetailsByDetailId", controller.updateDetailsByDetailId);

module.exports = router;