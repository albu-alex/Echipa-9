const { UserManager } = require('./src/controller/userManager');
const { setUserRole } = require('./src/auth/setUserRole');

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

async function startServer() {
  let userManager = new UserManager();

  app.post('/signIn', async (req, res) => {    // ! Might be vulnerable to XSS
    const uid = req.headers.usertoken.split(' ')[1];

    userManager.manageNewConnection(uid).then((newUser) => {
      console.log(`>>> SignedIn: ${uid} | ${newUser.getName()} | ${newUser.getEmail()} | ${newUser.getType()}`);
      res.send('ok');
    }).catch(error => {
      console.log(error.message);

      res.status(400);
      res.send('Invalid request!');
    });
  });

  app.post('/signUp', async (req, res) => {    // ! Might be vulnerable to XSS
    const uid = req.headers.usertoken.split(' ')[1];
    const name = req.headers.username;
    const email = req.headers.useremail;
    const type = req.headers.usertype;

    console.log(`>>> Test: ${uid} | ${name} | ${email} | ${type}`);

    userManager.manageNewConnection(uid, name, email, type).then(async (newUser) => {
      const status = await setUserRole(uid, newUser.getType());

      console.log(`>>> SignedUp: ${uid} | ${newUser.getName()} | ${newUser.getEmail()} | ${newUser.getType()}`);
      console.log(status.message);
      res.send('ok');

    }).catch(error => {
      console.log(error.message);

      res.status(400);
      res.send('Invalid request!');
    });
  });


  app.post('/isLoggedIn', (req, res) => {
    const uid = req.headers.usertoken.split(' ')[1];

    const isLoggedIn = userManager.isLoggedIn(uid);
    console.log(isLoggedIn);
    res.send(isLoggedIn);
  })
}
startServer();