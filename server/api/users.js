const router = require('express').Router();

// api/users
router.get('/', async (req, res, next) => {
  try {
console.log("ROUTE WORKED!!");
res.send("TPHTPHTEPHTPHTPHT!!!!")
  } catch (err) {
    next (err)
  }
})

module.exports = router;
