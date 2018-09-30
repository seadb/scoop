CREATE USER scoop WITH password 'PASSWORD';
DROP DATABASE IF EXISTS scoop;
CREATE DATABASE scoop;
GRANT CONNECT ON DATABASE scoop TO scoop;
GRANT USAGE ON SCHEMA public TO scoop;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO scoop;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO scoop;
ALTER USER scoop with SUPERUSER;


\c scoop;

