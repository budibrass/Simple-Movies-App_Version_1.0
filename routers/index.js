const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller");

router.get("/", Controller.show);

router.get("/add", Controller.getAdd);
router.post("/add", Controller.postAdd);

router.get("/:id", Controller.findById);

router.get("/:id/delete", Controller.delFilm);

router.get("/:id/edit", Controller.getEdit);
router.post("/:id/edit", Controller.postEdit);

module.exports = router;