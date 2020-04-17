exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("recipe_ingredients")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("recipe_ingredients").insert([
				{
					id: "79043c0d-12bf-4e14-8553-223dc1b6be2e",
					recipe_id: "2378d32d-05fc-41f1-b988-d66d1ec2f8b1",
					ingredient_id: "7f3dde6f-99cd-4125-8dcf-58f2608db2e2",
					quantity: 4,
				},
				{
					id: "d3d8bec9-404c-4700-9121-e274b5ec3aef",
					recipe_id: "2378d32d-05fc-41f1-b988-d66d1ec2f8b1",
					ingredient_id: "f8f26a3f-fa53-4ea2-95b0-59f1a6f5d20b",
					quantity: 2,
				},
				{
					id: "6bd982bb-fb94-4d6e-b151-ed37bddf04ac",
					recipe_id: "88095e30-bf84-4279-9611-888d7c21e8e3",
					ingredient_id: "f8f26a3f-fa53-4ea2-95b0-59f1a6f5d20b",
					quantity: 2,
				},
				{
					id: "963c71ca-cab6-4247-99f9-7dfd5f6e6ea1",
					recipe_id: "88095e30-bf84-4279-9611-888d7c21e8e3",
					ingredient_id: "7f3dde6f-99cd-4125-8dcf-58f2608db2e2",
					quantity: 2,
				},
				{
					id: "2c9c2cec-4d2f-4ed0-aa6e-a6b0eaff0d12",
					recipe_id: "88095e30-bf84-4279-9611-888d7c21e8e3",
					ingredient_id: "a7d58991-1351-45ac-b2ac-49c6aaf9ff83",
					quantity: 1,
				},
			]);
		});
};
