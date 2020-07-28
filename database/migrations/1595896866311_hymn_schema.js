/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class HymnSchema extends Schema {
  up() {
    this.create('hymns', table => {
      table.increments();
      table.integer('number').unsigned();
      table.string('name').notNullable();
      table.string('details');
      table.timestamps();
    });
  }

  down() {
    this.drop('hymns');
  }
}

module.exports = HymnSchema;
