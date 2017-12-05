module.exports = {
	database: "tarefas",
	username: "",
	password: "",
	params: {
		dialect: "sqlite",
		storage: "tarefas.sqlite",
		logging: false,
		define: {
			underscored: true
		}
	},
	jwtSecret: "App@2tar_test",
	jwtSession: {session: false}
};