const express = require("express");
const router = express.Router();
const friendController = require("../controllers/friend");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/allFriends", ensureAuth, friendController.getAllFriends);
router.get("/allUsers",ensureAuth,friendController.getAllUsers);
router.post("/addFriend", ensureAuth, friendController.addFriend);
router.get("/searchUsers/:query", ensureAuth, friendController.searchUsers);
// router.put('/approve', friendController.acceptFriend)
// router.delete('/delete', friendController.deleteFriend)

module.exports = router;
