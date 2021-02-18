const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  notes: [{ type: ObjectId, ref: 'Note' }],
})

module.exports = model('User', schema)
