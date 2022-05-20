/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    await knex.schema.createTable('books', function (table) {
        table.increments('id');
        table.string('book_title').notNullable();
        table.string('book_author').notNullable();
        table.string('available').notNullable();
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('books')
};
