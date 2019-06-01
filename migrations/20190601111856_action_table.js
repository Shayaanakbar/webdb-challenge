
exports.up = async function(knex) {
  await knex.schema.createTable('actions', function(tbl) {

    tbl.increments()

    tbl
      .string('description')
      .notNullable()

    tbl
      .string('notes')
      .notNullable()

    tbl
      .boolean('completed').defaultTo('false');
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('actions')
};
