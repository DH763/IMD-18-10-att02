const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
class Produto extends Model {}

Produto.init({
  nome: DataTypes.STRING,
  descricao: DataTypes.STRING,
  preco: DataTypes.REAL,
  imagem: DataTypes.STRING, 
  sequelize,
  modelName: 'Produto',
});

module.exports = Produto;