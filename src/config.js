export const {
  PORT = process.env.PORT || 4400,
  DB_USER = process.env.DB_USER,
  DB_PASSWORD = process.env.DB_PASSWORD,
  DB_HOST = process.env.DB_HOST,
  DB_DATABASE = process.env.DB_DATABASE,
  DB_PORT = process.env.DB_PORT,
  SALT_ROUNDS = 10,
  SECRET_JWT_KEY = process.env.SECRET_JWT_KEY,
} = process.env;
