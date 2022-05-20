/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('borrowed', function (table) {
        table.increments('booking_id');
        table.string('book_id').notNullable();
        table.string('student_id').notNullable();
        table.string('return_date').notNullable();
        table.string('issue_date').notNullable();
        table
            .integer('book_id')
            .unsigned()
            .references('books.id');
        table
            .integer('student_id')
            .unsigned()
            .references('students.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    return await knex.schema.dropTable('borrowed')
};
