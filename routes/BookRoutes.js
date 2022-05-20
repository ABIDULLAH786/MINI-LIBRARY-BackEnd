const {getBooks,findBookById} = require("../controllers/book")

const express = require('express');
const router = express.Router();


router.route('/bookById/:id').get(findBookById);
router.route('/books').get(getBooks);

module.exports = router;