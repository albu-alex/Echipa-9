const { User } = require('./Entities/user.js');
const { db } = require('./firebaseConfig.js');


let u = new User("XXXPaulXXX", "1234", "Paul", "a@a.a", "0123456789", "Address 7 Nr. 1", "50");
console.log(u.getUsername(), u.getPassword());