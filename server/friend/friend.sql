CREATE TABLE friends (
  from_user_id  integer NOT NULL references users(id),
  to_user_id    integer NOT NULL references users(id),
  created       timestamp DEFAULT current_timestamp,
  PRIMARY KEY   (from_user_id, to_user_id)
);
