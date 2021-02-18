const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if (req.methods === 'OPTIONS') {
    return next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(403).json({ message: 'Нет авторизации' })
    }
    const decoded = jwt.verify(token, config.get('secretToken'))
    req.id = decoded.id
    next()
  } catch (e) {
    res.status(403).json({ message: 'Нет авторизации' })
  }
}
