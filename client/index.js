const { admin, db } = require('./config/firebaseConfig');
const { User } = require('./src/Entities/user');

let u = new User("XXXPaulXXX", "1234", "Paul", "a@a.a", "0123456789", "Address 7 Nr. 1", "50");
console.log(u.getUsername(), u.getPassword());

console.log(admin);
console.log(db);