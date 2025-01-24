export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  database: {
    mongo: {
      host: process.env.MONGO_HOST || 'localhost',
      port: parseInt(process.env.MONGO_PORT || '27017', 10),
      dbName: process.env.MONGO_DB || 'fly_identification',
    },
    sqlite: {
      dbPath: process.env.SQLITE_DB || './data/database.sqlite',
    },
  },
});