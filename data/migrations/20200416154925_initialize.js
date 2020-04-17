exports.up = function (knex) {
	return knex.schema
		.createTable("recipes", (recipes) => {
			recipes.string("id", 36).primary();
			recipes.string("name", 255).notNullable().unique();
		})
		.createTable("instructions", (instructions) => {
			instructions.string("id", 36).primary();
			instructions.integer("step_number").notNullable();
			instructions.text("content").notNullable();
			instructions
				.string("recipe_id", 36)
				.notNullable()
				.references("recipes.id")
				.onDelete("RESTRICT")
				.onUpdate("CASCADE");
		})
		.createTable("ingredients", (ingredients) => {
			ingredients.string("id", 36).primary();
			ingredients.string("name", 255).notNullable();
		})
		.createTable("recipe_ingredients", (recipeIngredients) => {
			recipeIngredients.string("id", 36).primary();
			recipeIngredients.float("quantity").notNullable();
			recipeIngredients
				.string("recipe_id", 36)
				.notNullable()
				.references("recipes.id")
				.onDelete("RESTRICT")
				.onUpdate("CASCADE");
			recipeIngredients
				.string("ingredient_id", 36)
				.notNullable()
				.references("ingredients.id")
				.onDelete("RESTRICT")
				.onUpdate("CASCADE");
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("recipe_ingredients")
		.dropTableIfExists("ingredients")
		.dropTableIfExists("instructions")
		.dropTableIfExists("recipes");
};
