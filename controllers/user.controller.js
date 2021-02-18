const { User } = require('../models')
const genericCrud = require('./generic.controller')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = {
  ...genericCrud(User),
  async register({ body }, res) {
    try {
      const { email, password, name } = body
      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: 'Пользователь существует' })
      }

      const hashPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, name, password: hashPassword })
      await user.save()

      return res.status(201).json({ message: 'Регистрация прошла успешно' })
    } catch (e) {
      console.log(e)
    }
  },
  async login({ body }, res) {
    try {
      const { email, password } = body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'Неверные данные' })
      }

      const isMatched = await bcrypt.compare(password, user.password)

      if (!isMatched) {
        return res.status(400).json({ message: 'Неверные данные' })
      }

      const token = jwt.sign({ id: user._id }, config.get('secretToken'), {
        expiresIn: '7d',
      })

      const { notes, name } = user

      return res.status(200).json({ token, email: user.email, notes, name })
    } catch (e) {
      console.log(e)
    }
  },
  async get({ id }, res) {
    try {
      const user = await User.findById(id)
      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }

      const { email, notes, name } = user

      return res.status(200).json({ email, notes, name })
    } catch (e) {
      console.log(e)
    }
  },
  async update({ id, body }, res) {
    try {
      const user = await User.findByIdAndUpdate(id, body, { new: true })

      const { email, notes, name } = user

      return res.status(200).json({ email, notes, name })
    } catch (e) {
      console.log(e)
    }
  },
}
