var mysql = require('mysql');
var faker = require("faker");
 
var client = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'test'
});

var sql = '';

client.connect();

// use faker to create fake records
const createUsers = num => {
  let users = [];
  for (let i = 0; i < num; i += 1) {
    users.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      jobTitle: faker.name.jobTitle(),
      email: faker.internet.email(),
      telephone: faker.phone.phoneNumber()
    });
  }
  return users;
};

createUsers(100000).map(user => {
  client.query(sql, function(err, res) {
    sql = `INSERT INTO User (firstName, lastName, jobTitle, email, telephone) VALUES("${user.firstName}", "${user.lastName}", "${user.jobTitle}", "${user.email}", "${user.telephone}")`;
    console.log('SQL', typeof sql, sql);
    client.query(sql);
  });
});
