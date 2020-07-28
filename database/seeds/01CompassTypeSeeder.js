/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} Model */

/** @type {Model} */
const CompassType = use('App/Models/CompassType');

class CompassTypeSeeder {
  async run() {
    await CompassType.createMany([
      {
        id: 1,
        description: 'Simples',
      },
      {
        id: 2,
        description: 'Composto',
      },
    ]);
  }
}

module.exports = CompassTypeSeeder;
