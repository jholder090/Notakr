const db = require('./db');
const User = require('./User');
const Note = require('./Note');

// Associations
User.hasMany(Note);
Note.belongsTo(User);

const syncAndSeed = async () => {
  await db.sync({force: true});

  await User.create({
    username: "tom",
    password: "tompw"
  });

  await User.create({
    username: "pat",
    password: "patpw"
  });

  await Note.create({
    text: "Hi, I'm Tom!"
  });

  await Note.create({
    text: "Hi, I'm Pat!"
  });

  console.log("SEEDING INDEEDING!")
};

module.exports = { db, syncAndSeed }
