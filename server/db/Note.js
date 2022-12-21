const Sequelize = require('sequelize');
const db = require('./db');

const Note = db.define('note', {
  text: Sequelize.STRING
})

module.exports = Note;
