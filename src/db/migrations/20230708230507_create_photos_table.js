/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('photos', (table) => {
        table.increments('photo_id').primary();
        table.string('imgUrl');
        table.string('caption');
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {

};
