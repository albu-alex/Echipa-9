const { UserManager } = require('./src/controller/userManager');
const { UserValidator } = require('./src/service/userValidator');
const { setUserRole } = require('./src/auth/setUserRole');

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

async function startServer() {
  let userManager = new UserManager();
  // let service = new Service();

  app.post('/signIn', async (req, res) => {    // ! Might be vulnerable to XSS
    try {
      const idToken = req.headers.usertoken.split(' ')[1];
      
      const userData = await UserValidator.getUserData(idToken);
      console.log(userData);
      const uid = userData['uid'];

      userManager.manageNewConnection(uid).then((newUser) => {
        console.log(`>>> SignedIn: ${uid} | ${newUser.getName()} | ${newUser.getEmail()} | ${newUser.getType()}`);
        res.send('ok');
      });
      
      } catch(error) {
        console.log(error.message);
  
        res.status(400);
        res.send('Invalid request!');
      }
  });

  app.post('/signUp', async (req, res) => {    // ! Might be vulnerable to XSS
    try {
      const idToken = req.headers.usertoken.split(' ')[1];
  
      const user_data = await UserValidator.getUserData(idToken);
      const uid = user_data['uid'];
  
      const name = req.headers.username;
      const email = req.headers.useremail;
      const type = req.headers.usertype;
  
      userManager.manageNewConnection(uid, name, email, type).then(async (newUser) => {
        const status = await setUserRole(uid, newUser.getType());
  
        console.log(`>>> SignedUp: ${uid} | ${newUser.getName()} | ${newUser.getEmail()} | ${newUser.getType()}`);
        console.log(status.message);
        res.send('ok');
  
      });
  
      } catch(error) {
        console.log(error.message);
  
        res.status(400);
        res.send('Invalid request!');
      }
  });


  app.post('/isLoggedIn', (req, res) => {
    const uid = req.headers.usertoken.split(' ')[1];

    const isLoggedIn = userManager.isLoggedIn(uid);
    console.log(isLoggedIn);
    res.send(isLoggedIn);
  })


//   app.uploadPaper('/uploadPaper', (req, res) => {
//     const uid = req.headers.usertoken.split(' ')[1];

//     const paperData = null;
//     const name = 'name';

//     service.uploadPaper(paperData, name);

//   });


//   app.getPaper('/getPaper', (req, res) => {
//     const uid = req.headers.usertoken.split(' ')[1];

//     const paper_path = 'name';

//     const data = service.uploadPaper(paperData);

//   });
}
startServer();