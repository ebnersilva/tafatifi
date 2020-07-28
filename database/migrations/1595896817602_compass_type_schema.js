/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CompassTypeSchema extends Schema {
  up() {
    this.create('compass_types', table => {
      table.increments();
      table.string('description').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('compass_types');
  }
}

module.exports = CompassTypeSchema;
