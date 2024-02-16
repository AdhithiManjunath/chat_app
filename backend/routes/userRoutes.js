const express = require('express');
const router = express.Router();

// import { Router } from 'express';
// const router = Router();

// import registerUser from "../controllers/userController";
const {registerUser,authUser} = require("../controllers/userController")




router.route("/").post(registerUser);
// router.post("/",registerUser);
router.route("/login").post(authUser);

// export default  router;

module.exports = router;
