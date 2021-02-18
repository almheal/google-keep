const {Label} = require('../models')
const genericCrud = require('./generic.controller')

module.exports = {
  ...genericCrud(Label)
}