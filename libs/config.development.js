var logger = require('./logger.js');

module.exports = {
	database: "tarefas",
	username: "",
	password: "",
	params: {
		dialect: "sqlite",
		storage: "tarefas.sqlite",
		logging: (sql) => {
			logger.info(`[${new Date()}] ${sql}`);
		},
		define: {
			underscored: true
		}
	},
	jwtSecret: "App@2tar",
	jwtSession: {session: false}
};