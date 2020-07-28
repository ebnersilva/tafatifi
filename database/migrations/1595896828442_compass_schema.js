/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CompassSchema extends Schema {
  up() {
    this.create('compasses', table => {
      table.increments();
      table.integer('nominator').unsigned();
      table.integer('denominator').unsigned();
      table
        .integer('compass_type_id')
        .unsigned()
        .references('id')
        .inTable('compass_types')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.timestamps();
    });
  }

  down() {
    this.drop('compasses');
  }
}

module.exports = CompassSchema;
