const { note } = require('../controllers')
const Router = require('express')
const router = Router()

router.post('/note', note.create)
router.get('/note/:id', note.get)
router.get('/notes', note.getAll)
router.put('/note/:id', note.update)
router.delete('/note/:id', note.delete)

module.exports = router
