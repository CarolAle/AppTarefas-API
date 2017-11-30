var bcrypt = require('bcrypt');
module.exports = (sequelize, DataType) => {
	const Users = sequelize.define("Users", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}, 
		name: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		email: {
			type: DataType.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	}, {
		hooks: {							//funções executaveis antes ou depois de uma operação no banco
			beforeCreate: user => {			//antes de cadastrar um novo usuario
				const salt = bcrypt.genSaltSync();  		//bcrypt criptografa a senha do usuario
				user.password = bcrypt.hasSync(user.password, salt);
			}
		},
	 
		classMethods: {
			associate: models => {
				Users.hasMany(models.Tasks);
			},
			isPassword: (encodedPassword, password) => {		//compara se a senha informada é igual a criptografada
				return bcrypt.compareSync(password, encodedPassword);
			}
		}
	});
	return Users;
}