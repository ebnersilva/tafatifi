/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} Model */

/** @type {Model} */
const Compass = use('App/Models/Compass');

class CompassSeeder {
  async run() {
    await Compass.createMany([
      {
        id: 1,
        nominator: 2,
        denominator: 2,
        compass_type_id: 1,
      },
      {
        id: 2,
        nominator: 2,
        denominator: 4,
        compass_type_id: 1,
      },
      {
        id: 3,
        nominator: 2,
        denominator: 8,
        compass_type_id: 1,
      },

      {
        id: 4,
        nominator: 3,
        denominator: 2,
        compass_type_id: 1,
      },
      {
        id: 5,
        nominator: 3,
        denominator: 4,
        compass_type_id: 1,
      },
      {
        id: 6,
        nominator: 3,
        denominator: 8,
        compass_type_id: 1,
      },

      {
        id: 7,
        nominator: 4,
        denominator: 2,
        compass_type_id: 1,
      },
      {
        id: 8,
        nominator: 4,
        denominator: 4,
        compass_type_id: 1,
      },
      {
        id: 9,
        nominator: 4,
        denominator: 8,
        compass_type_id: 1,
      },

      {
        id: 10,
        nominator: 6,
        denominator: 2,
        compass_type_id: 2,
      },
      {
        id: 11,
        nominator: 6,
        denominator: 4,
        compass_type_id: 2,
      },
      {
        id: 12,
        nominator: 6,
        denominator: 8,
        compass_type_id: 2,
      },

      {
        id: 13,
        nominator: 9,
        denominator: 2,
        compass_type_id: 2,
      },
      {
        id: 14,
        nominator: 9,
        denominator: 4,
        compass_type_id: 2,
      },
      {
        id: 15,
        nominator: 9,
        denominator: 8,
        compass_type_id: 2,
      },

      {
        id: 16,
        nominator: 12,
        denominator: 2,
        compass_type_id: 2,
      },
      {
        id: 17,
        nominator: 12,
        denominator: 4,
        compass_type_id: 2,
      },
      {
        id: 18,
        nominator: 12,
        denominator: 8,
        compass_type_id: 2,
      },
    ]);
  }
}

module.exports = CompassSeeder;
