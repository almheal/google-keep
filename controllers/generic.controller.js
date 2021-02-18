const genericCrud = model =>({
  async get({params: { id }},res){
    try {
      const item = await model.findById(id)
      return res.status(200).json(item)
    } catch (e) {
      res.status(500).json({message: 'Что-то пошло не так'})
    }
  },
  async getAll(req,res){
    try {
      const items = await model.find({})
      return res.status(200).json(items)
    } catch (e) {
      res.status(500).json({message: 'Что-то пошло не так'})
    }

  },
  async create({body},res){
    try {
      const item = new model(body)
      const newItem = await item.save()
      return res.status(201).json(newItem)
    } catch (e) {
      res.status(500).json({message: 'Что-то пошло не так'})
    }

  },
  async update({params: {id}, body},res){
    try {
      const item = await model.findByIdAndUpdate(id, body, {new: true})
      return res.status(200).json(item)
    } catch (error) {
      res.status(500).json({message: 'Что-то пошло не так'})
    }
  },
  async delete ({ params: { id } }, res) {
    try {
      await model.findByIdAndDelete(id)
      return res.status(200).json({ message: 'Удаленно' })
    } catch (e) {
      res.status(500).json({message: 'Что-то пошло не так'})
    }
  }
})

module.exports = genericCrud