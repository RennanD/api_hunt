const mongoose = require('../mongoose')

const Product = mongoose.model('Product')

module.exports = {
	
	async list(req, res){

		const { page = 1 } = req.query

		const Products = await Product.paginate({},{page, limit:10})

		return res.json(Products)
	},

	async show(req, res){
		const Products = await Product.findById(req.params.id)

		return res.json(Products)
	},

	async store(req, res){

		const Products = await Product.create(req.body)

		return res.json(Products)
	},

	async update(req,res){
		const Products = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		})

		return res.json(Products)
	},

	async destroy(req, res){
		await Product.findByIdAndRemove(req.params.id)

		return res.json('msg: Produto excluído com sucesso')
	}


}