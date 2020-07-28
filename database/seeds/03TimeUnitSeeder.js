/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} Model */

/** @type {Model} */
const TimeUnit = use('App/Models/TimeUnit');

class TimeUnitSeeder {
  async run() {
    await TimeUnit.createMany([
      {
        id: 1,
        name: 'Semibreve',
        relative_value: 1,
        image_url: null,
      },
      {
        id: 2,
        name: 'Mínima',
        relative_value: 2,
        image_url: null,
      },
      {
        id: 3,
        name: 'Semínima',
        relative_value: 4,
        image_url: null,
      },
      {
        id: 4,
        name: 'Colcheia',
        relative_value: 8,
        image_url: null,
      },
      {
        id: 5,
        name: 'Semicolcheia',
        relative_value: 16,
        image_url: null,
      },
      {
        id: 6,
        name: 'Fusa',
        relative_value: 32,
        image_url: null,
      },
      {
        id: 7,
        name: 'Semifusa',
        relative_value: 64,
        image_url: null,
      },
    ]);
  }
}

module.exports = TimeUnitSeeder;
