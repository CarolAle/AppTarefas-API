//inicia servidor atraves da função app.listen
module.exports = app => {
	app.db.sequelize.sync().done(() => {  //sincronizar as tabelas do banco de dados com os modelos sequelize
		app.listen(app.get("port"), () => {
			console.log('app-nodejs = porta ${app.get("port")}');
		});
	});
	
};