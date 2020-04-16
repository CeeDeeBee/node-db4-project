exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("instructions")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("instructions").insert([
				{
					id: "069191dd-ac47-4ccd-a377-72e9176dcc57",
					step_number: 1,
					content: "Mix the batter",
					recipe_id: "2378d32d-05fc-41f1-b988-d66d1ec2f8b1",
				},
				{
					id: "ddd965e3-d715-4af2-b98b-91b8e946949b",
					step_number: 2,
					content: "Cook it",
					recipe_id: "2378d32d-05fc-41f1-b988-d66d1ec2f8b1",
				},
				{
					id: "b78f1ae6-8bd1-4718-ac1d-c6ad8ac29f29",
					step_number: 1,
					content: "Buy some eggs",
					recipe_id: "88095e30-bf84-4279-9611-888d7c21e8e3",
				},
				{
					id: "5cfc80e7-8f1c-46ae-9ed8-7c5e8e1d519e",
					step_number: 1,
					content: "Just buy it",
					recipe_id: "30bdbb89-a860-40ae-bab8-e4b87028b8a8",
				},
			]);
		});
};
