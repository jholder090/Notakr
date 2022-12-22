const Sequelize = require('sequelize');
const db = require('./db');
const jwt = require('jsonwebtoken');

const User = db.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

User.authenticate = async ({ username, password }) => {
  try {
    const user = await User.findOne({
      where: {
        username,
        password
      }
    });
    if (user) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT);
      console.log("STEP 1: DB TOKEN", token)
      return token;
    }
  } catch (ex) {
    const error = Error('bad credentials');
    error.status = 401;
    throw error;
  }

};

User.byToken = async (token) => {
  try {
const payload = jwt.verify(token, process.env.JWT);
const user = await User.findByPk(payload.userId);
if (user) {
  console.log("STEP 4: DB DATA VERIFIED", user)
  return user;
}
  } catch (ex) {
    const error = Error('bad credentials');
    error.status = 401;
    throw error;
  }
};

User.findNotes = async (token, id) => {
  const payload = await jwt.verify(token, process.env.JWT)
  if (id == payload.userId) {
    const user = await User.findByPk(payload.userId);
    if (user) {
      const notes = await user.getNotes();
      return notes;
    }
  }
};

module.exports = User;
