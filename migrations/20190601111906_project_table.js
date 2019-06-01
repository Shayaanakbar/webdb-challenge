
exports.up = async function(knex) {
  await knex.schema.createTable('actions', function(tbl) {

    tbl.increments()

    tbl
      .string('name', 128)
      .notNullable()

    tbl
      .string('description')
      .notNullable()

    tbl
      .boolean('completed').defaultTo('false');
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects')
};
