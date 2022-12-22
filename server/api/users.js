const router = require('express').Router();
const User = require('../db/User')

// api/users
router.post('/', async (req, res, next) => {
  try {
    const user = await User.authenticate(req.body)
    console.log("API USER", user)
    res.send({user: user});
  } catch (err) {
    next(err)
  }
})



// TEST
// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (err) {
//     next(err)
//   }
// });

module.exports = router;
