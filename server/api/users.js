const router = require('express').Router();

// api/users
router.get('/', async (req, res, next) => {
  try {
console.log("ROUTE WORKED!!")
  } catch (err) {
    next (err)
  }
})

module.exports = router;
