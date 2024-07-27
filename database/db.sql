
CREATE TABLE usuarios
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(30) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL

);

INSERT INTO users
  (name, email)
VALUES
  ('Josep lopez', 'josep@gmail.com'),
  ('Karen Goss', 'karen@gmail.com');