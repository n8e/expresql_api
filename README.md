# Express routing with mySQL DB

## Installation
Install `mysql` using Homebrew by running `brew install mysql`.
Start mySQL server by running `mysql.server start` on the terminal.
Once the process is running then begin a session on terminal by running `mysql -h 127.0.0.1 -u root`.
Create a mySQL database called `test`. Note your user-name and password. In my case, I use `root` and a blank password respectively.
In this mode, create a table and call it `User`:

```
 CREATE TABLE User ( id smallint unsigned not null auto_increment, firstName varchar(20) not null, lastName varchar(20) not null, jobTitle varchar(80) not null, email varchar(80) not null, telephone varchar(50) not null, constraint pk_example primary key (id) );
```

## Seeding data into the database
Run the seeder to seed into the database:
```
node seeder.js
```

## Running server
Run:
```
npm start
```

## Testing API
Using POSTMAN or curl, and while the server is running, access http://localhost:3000/api/v1/users

Or `curl http://localhost:3000/api/v1/users` on terminal.

This should return a string output with the users in your db.
