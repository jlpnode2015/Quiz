//Definicion del m�dulo de quiz

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Quiz',
	{
	  pregunta: DataTypes.STRING,
	  respuesta: DataTypes.STRING,
	});
}

