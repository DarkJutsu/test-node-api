import pg from "pg";

export const pool = new pg.Pool({
  user: "sa",
  password: "123",
  database: "nodeapi",
  host: "127.0.0.1",
  port: "5432",
});
