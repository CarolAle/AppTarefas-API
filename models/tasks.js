module.exports = app => {
	return {
		findAll: (params, callback) =>{   //callback retorna um array estatico de tarefas
			return callback([
				{title: "Fazer compras"},
				{title: "Concrtar PC"},
			]);
		}
	};
};