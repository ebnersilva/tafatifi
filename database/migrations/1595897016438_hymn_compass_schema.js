/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class HymnCompassSchema extends Schema {
  up() {
    this.create('hymn_compasses', table => {
      table.increments();
      table
        .integer('hymn_id')
        .unsigned()
        .references('id')
        .inTable('hymns')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table
        .integer('compass_id')
        .unsigned()
        .references('id')
        .inTable('compasses')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.timestamps();
    });
  }

  down() {
    this.drop('hymn_compasses');
  }
}

module.exports = HymnCompassSchema;
