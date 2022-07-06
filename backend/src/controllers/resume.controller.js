

const express = require("express");
const router = express.Router();

const Resume = require("../models/resume.model");

router.get("", async (req, res) => {
	try {
		const resume = await Resume.find().lean().exec();
		return res.status(200).send(resume);
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.post("", async (req, res) => {
	try {
		const resume = await Resume.create(req.body);
		return res.status(200).send(resume);
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const resume = await Resume.findById(req.params.id, req.body)
			.lean()
			.exec();
		return res.status(200).send(resume);
	} catch (err) {
		return res.status(500).send(err);
	}
});



module.exports = router;