const router = require('express').Router()
const {User} = require('../db/models')

const checkIfAdmin = (req, res, next) => {
  if (req.user === undefined || req.user.email !== 'jen@fakemail.com') {
    const error = new Error('illegal action')
    error.status = 401
    return next(error)
  }
  next()
}

router.get('/', checkIfAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
router.put('/:userId', async (req, res, next) => {
  try {
    let user = await User.findByPk(req.user.id)
    user.first = req.body.first
    user.last = req.body.last
    user.email = req.body.email
    await user.save()
    res.json(user)
  } catch (err) {
    next(err)
  }
})

module.exports = router
