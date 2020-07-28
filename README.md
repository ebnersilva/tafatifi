# Tafatifi API application

## Setup

Manually clone the repo and then run `yarn`.

## Database

Choose a database to work on that is supported by adonis, create the database, and configure in the .env - env.example file variables added to the project

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seeds

Run the following commands to run startup migrations.

```js
adonis seed --files 01CompassTypeSeeder.js
```

```js
adonis seed --files 02CompassSeeder.js
```

```js
adonis seed --files 03TimeUnitSeeder.js 
```
