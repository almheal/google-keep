const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose')

const schema = new Schema({
  title: { type: String },
  text: { type: String },
  color: { type: String },
  coAuthor: { type: String },
  type: { type: String },
  favorite: { type: Boolean, default: false },
  labels: [{ type: ObjectId, ref: 'Label' }],
  owner: { type: ObjectId, ref: 'User' },
})

module.exports = model('Note', schema)
