const express = require("express");

const ingredients = require("./ingredients-model");

const router = express.Router();

router.get("/:id/recipes", (req, res) => {
	ingredients
		.getRecipes(req.params.id)
		.then((recipes) => res.status(200).json(recipes))
		.catch((err) => {
			console.log(err.message);
			res.status(500).json({ error: err.message });
		});
});

module.exports = router;
