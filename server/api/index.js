const router = require('express').Router();

// /api
router.use('/users', require('./users'));
router.use('/notes', require('./notes'));

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
