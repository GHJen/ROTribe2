const router = require('express').Router()

const checkIfAllowed = (req, res, next) => {
  if (
    req.user === undefined ||
    (req.user.email !== 'jen@fakemail.com' &&
      req.params.id &&
      req.user.id !== req.params.id)
  ) {
    const error = new Error('illegal action')
    error.status = 401
    return next(error)
  }
  next()
}

router.use('/users', checkIfAllowed, require('./users'))
router.use('/entries', checkIfAllowed, require('./entries'))
router.use('/prompts', checkIfAllowed, require('./prompts'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
