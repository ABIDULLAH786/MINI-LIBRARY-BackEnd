const knex = require("../database/knex")

module.exports.getBooks = async (req, res) => {
    try {
        const books = await knex('books').select('*');

        res.status(200).json({
            success: true,
            books: books
        })
    } catch (err) {
        res.status(500).json("something went wrong")
    }
}
exports.findBookById = async (req, res, next) => {
    try {
        const bookDetail = await knex('books').where('id', req.params.id).select("*");
        res.status(200).json({
            success: true,
            bookDetail: bookDetail
        })
    } catch (err) {
        res.status(500).json("something went wrong")
    }
}