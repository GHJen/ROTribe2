const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/entries', require('./entries'))
router.use('/prompts', require('./prompts'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
