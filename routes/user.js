const {user} = require('../controllers')
const {authMiddleware} = require('../middlewares')
const Router = require('express')
const router = Router()

router.post('/register', user.register)
router.post('/login', user.login)
router.get('/auth', authMiddleware, user.get)
router.put('/user', user.update)



module.exports = router