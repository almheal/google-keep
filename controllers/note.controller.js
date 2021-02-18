const {Note} = require('../models')
const genericCrud = require('./generic.controller')

module.exports = {
  ...genericCrud(Note)
}