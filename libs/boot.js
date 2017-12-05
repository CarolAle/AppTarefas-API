//inicia servidor atraves da função app.listen
module.exports = app => {
	if(process.env.NODE_ENV !== "test") {
		app.db.sequelize.sync().done(() => {  //sincronizar as tabelas do banco de dados com os modelos sequelize
			app.listen(app.get("port"), () => {
				console.log(`App Tarefas - porta ${app.get("port")}`);
			});
		});
	}
	
};