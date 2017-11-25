//inicia servidor atraves da função app.listen
module.exports = app => {
	app.listen(app.get("port"), () => {
		console.log('app-nodejs = porta ${app.get("port")}');
		});
};