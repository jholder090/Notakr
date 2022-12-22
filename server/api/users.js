const router = require('express').Router();
const { default: axios } = require('axios');
const User = require('../db/User')

// api/users
router.post('/', async (req, res, next) => {
  try {
    const token = await User.authenticate(req.body);
    console.log("STEP 2: API TOKEN", token)
    res.send({token: token});
  } catch (err) {
    next(err)
  }
});

// api/users
router.get('/', async (req, res, next) => {
  try {
    const data = await User.byToken(req.headers.authorization);
    console.log("STEP 5: API DATA", data)
    res.send(data);
  }catch (err) {
    next (err)
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
