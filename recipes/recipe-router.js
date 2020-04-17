const express = require("express");

const recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
	recipes
		.getRecipes()
		.then((recipes) => res.status(200).json(recipes))
		.catch((err) => {
			console.log(err.message);
			res.status(500).json({ error: err.message });
		});
});

router.get("/:id/shoppingList", (req, res) => {
	recipes
		.getShoppingList(req.params.id)
		.then((list) => res.status(200).json(list))
		.catch((err) => {
			console.log(err.message);
			res.status(500).json({ error: err.message });
		});
});

router.get("/:id/instructions", (req, res) => {
	recipes
		.getInstructions(req.params.id)
		.then((instructions) => res.status(200).json(instructions))
		.catch((err) => {
			console.log(err.message);
			res.status(500).json({ error: err.message });
		});
});

module.exports = router;
