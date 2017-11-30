module.exports = {
	database: "tarefas",
	username: "",
	password: "",
	params: {
		dialect: "sqlite",
		storage: "tarefas.sqlite",
		define: {
			underscored: true
		}
	},
	jwtSecret: "App@2tar",
	jwtSession: {session: false}
};