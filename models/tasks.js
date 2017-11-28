module.exports = (sequelize, DataType) => {
	const Tasks = sequelize.define("Tasks", {  //função responsável por criar ou alterar uma tabela no banco
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataType.STRING,
			allowNull : false,
			validate: {
				notEmpty: true
			}
		},
		done: {
			type: DataType.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	}, {
		classMethods: {
			associate: function (models) {    //fuñção que permite associação entre os modelos
				Tasks.belongsTo(models.Users);
			}
		}
	});
	return Tasks;
};


// module.exports = app => {
// 	return {
// 		findAll: (params, callback) =>{   //callback retorna um array estatico de tarefas
// 			return callback([
// 				{title: "Fazer compras"},
// 				{title: "Concrtar PC"},
// 			]);
// 		}
// 	};
// };