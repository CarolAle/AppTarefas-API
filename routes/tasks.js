module.exports = app => {
	const Tasks = app.db.models.Tasks;
	app.get("/tasks", (req, res) => {
		Tasks.findAll({}).then(tasks => {  //params e callback de models
			res.json({tasks: tasks});
		});
	});
};