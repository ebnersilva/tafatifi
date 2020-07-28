/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CompassNoteSchema extends Schema {
  up() {
    this.create('compass_notes', table => {
      table.increments();
      table.string('description');
      table
        .integer('time_unit_id')
        .unsigned()
        .references('id')
        .inTable('time_units')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.timestamps();
    });
  }

  down() {
    this.drop('compass_notes');
  }
}

module.exports = CompassNoteSchema;
