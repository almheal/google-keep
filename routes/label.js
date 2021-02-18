const { label } = require('../controllers')
const Router = require('express')
const router = Router()

router.post('/label', label.create)
router.get('/label/:id', label.get)
router.get('/labels', label.getAll)
router.put('/label/:id', label.update)
router.delete('/label/:id', label.delete)

module.exports = router
