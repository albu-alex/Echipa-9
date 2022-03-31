const { admin } = require('../config/firebaseConfig');

function signUp(_email, _password, _name, _type) {
    admin.auth().createUser({
        email: _email,
        password: _password,
        name: _name,
        type: _type
    })
    .then((userRecord) => {
        console.log('Successfully created new user:', userRecord.uid);
    })
    .catch((error) => {
        console.log('Error creating new user:', error.message);
    })
}

exports.signUp = signUp;