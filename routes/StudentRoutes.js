const {getStudents,findStudentById} = require("../controllers/student")

const express = require('express');
const router = express.Router();

router.route('/studentById/:id').get(findStudentById);
router.route('/students').get(getStudents);


module.exports = router;