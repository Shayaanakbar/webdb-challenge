
exports.up = async function(knex) {
  await knex.schema.createTable('actions', function(tbl) {

    tbl.increments()

    tbl
      .string('description')
      .notNullable()

    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')

    tbl
      .boolean('completed').defaultTo('false');
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('actions')
};
