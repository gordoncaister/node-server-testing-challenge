// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || {
database: 'projects',
user:     'postgres',
password: '0n0mat0p0eia'
};
module.exports = {

  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/testing.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: ":memory:",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  }

};
