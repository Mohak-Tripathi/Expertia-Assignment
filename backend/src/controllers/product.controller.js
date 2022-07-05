const express = require("express");
const router = express.Router();

const User = require("../models/product.model");

router.get("", async (req, res) => {
	try {
		const users = await User.find().lean().exec();
		return res.status(200).send(users);
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.post("", async (req, res) => {
	try {
		const user = await User.create(req.body);
		return res.status(200).send(user);
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id, req.body)
			.lean()
			.exec();
		return res.status(200).send(user);
	} catch (err) {
		return res.status(500).send(err);
	}
});



module.exports = router;