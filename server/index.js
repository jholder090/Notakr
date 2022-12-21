const port = process.env.PORT || 3000;
const app = require('./server');
// const db = require('./db');

const init = () => {
  // await db.syncAndSeed();
  app.listen(port, () => console.log(`listening on port ${port}`));
};

init();
