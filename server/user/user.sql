CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(2048),
  bio VARCHAR(1024),
  age INTEGER,
  sex VARCHAR,
  created timestamp default current_timestamp
);
