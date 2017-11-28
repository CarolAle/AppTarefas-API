var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

let db = null


module.exports = app => {
	if (!db) {
		const config = app.libs.config;
		const sequelize = new Sequelize(
			config.database,
			config.username,
			config.password,
			config.params
			);
		db = {
			sequelize,
			Sequelize,
			models: {}
		};
		const dir = path.join(__dirname, "models");
		fs.readdirSync(dir).forEach(file => {
			const modelDir = path.join(dir, file);
			const model = sequelize.import(modelDir);
			db.models[model.name] = model;
		});

		Object.keys(db).forEach(function(modelName) {
      		if ("associate" in db[modelName]) {
        		db[modelName].associate(db);
      		}
    	});
	}
	return db;
};