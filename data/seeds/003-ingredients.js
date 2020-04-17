exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("ingredients")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("ingredients").insert([
				{ id: "7f3dde6f-99cd-4125-8dcf-58f2608db2e2", name: "milk" },
				{ id: "f8f26a3f-fa53-4ea2-95b0-59f1a6f5d20b", name: "eggs" },
				{ id: "a7d58991-1351-45ac-b2ac-49c6aaf9ff83", name: "cheese" },
			]);
		});
};
