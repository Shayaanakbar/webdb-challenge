
exports.up = async function(knex) {
  await knex.schema.createTable('actions', function(tbl) {

    tbl.increments()

    tbl
      .string('description')
      .notNullable()

    tbl
      .integer('project_id')
      .notNullable()
      .references()
      .inTable('projects')

    tbl
      .boolean('completed').defaultTo('false');
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('actions')
};
