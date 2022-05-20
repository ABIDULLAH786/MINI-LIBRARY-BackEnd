const knex = require("../database/knex")

module.exports.getStudents = async (req, res) => {
    try {
        const students = await knex('students').select(['id', 'fname', 'lname']);
        res.status(200).json({
            success: true,
            students: students
        })
    } catch (err) {
        res.status(500).json("something went wrong")
    }
}

exports.findStudentById = async (req, res, next) => {
    try {
        const students = await knex('students').where('id',req.params.id).select(['id', 'fname', 'lname']);
        res.status(200).json({
            success: true,
            students: students
        })
    } catch (err) {
        res.status(500).json("something went wrong")
    }
}