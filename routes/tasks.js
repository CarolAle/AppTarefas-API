module.exports = app => {
	app.get("/", (req, res) => {
		res.json({status: "app nodejs"});
	});
};

module.exports = app => {
	app.get("/tasks", (req, res) => {
		res.json({
			tasks: [
			{title: "Fazer compras"},
			{title: "Concrtar PC"},
			]
		});
	});
};