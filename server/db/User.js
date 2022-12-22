const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

User.authenticate = async ({ username, password }) => {
  const user = await User.findOne({
    where: {
      username,
      password
    }
  });
  if (user) {
    console.log("DB USER", user)
    return user;
  }
}

module.exports = User;
