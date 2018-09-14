# scoop backend

Dependencies:
- Postgres
- NodeJS

## Setup

### Database

1. Modify the first line of database.sql and replace 'PASSWORD' with a secure password
```
vim database.sql
```


2. Move the script to create db and user
```
sudo cp database.js /var/lib/pgsql/
```
3. Run the commands through psql as the postgres user
```
sudo -i -u postgres psql -f database.sql
```

4. Set the following env variables
```
export NODE_HOST=localhost
export NODE_PORT=3000
export NODE_ENV=development
export POSTGRES_CONNECTION_STRING='postgres://scoop:password@localhost:5432/scoop'
export TOKEN_SECRET=''
```

## Run server

npm run start
