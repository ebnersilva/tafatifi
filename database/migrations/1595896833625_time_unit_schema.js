/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TimeUnitSchema extends Schema {
  up() {
    this.create('time_units', table => {
      table.increments();
      table.string('name').notNullable();
      table.integer('relative_value').unsigned();
      table.text('image_url');
      table.timestamps();
    });
  }

  down() {
    this.drop('time_units');
  }
}

module.exports = TimeUnitSchema;
