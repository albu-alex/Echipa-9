const { User } = require('./Entities/user.js');
const { db } = require('./firebaseConfig.js');


let u = new User("XXXPaulXXX", "1234", "Paul", "a@a.a", "0123456789", "Address 7 Nr. 1", "50");
//console.log(u.getUsername(), u.getPassword());

async function setData(user) {
    const response = await db.collection('Users').doc().set(user.toFirestore());
    console.log(response);
}
//setData(u);


async function getData() {
    const userRef = db.collection('Users');
    const snapshot = await userRef.get();
    const docs = snapshot.docs.map(doc => doc.data())
    docs.forEach(doc => {
        console.log(doc);
    });

    const retrivedUser = User.fromFirestore(docs[0]);
    console.log(retrivedUser.getUsername(), retrivedUser.getPassword(), retrivedUser.getPhoneNumber(), retrivedUser.getAge());
}
getData();