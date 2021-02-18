const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose')

const schema = new Schema({
  title: { type: String },
  notes: [{ type: ObjectId, ref: 'Note' }],
})

module.exports = model('Label', schema)
