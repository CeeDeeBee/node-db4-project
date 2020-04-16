exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("recipes")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("recipes").insert([
				{ id: "2378d32d-05fc-41f1-b988-d66d1ec2f8b1", name: "Cake" },
				{ id: "88095e30-bf84-4279-9611-888d7c21e8e3", name: "Omlet" },
				{ id: "30bdbb89-a860-40ae-bab8-e4b87028b8a8", name: "Bread" },
			]);
		});
};
