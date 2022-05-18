const { UserManager } = require('./src/controller/userManager');
const { UserValidator } = require('./src/service/userValidator');

const express = require('express');
const bp = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Listening on port ${port}`));

async function startServer() {
  const userManager = new UserManager();
  // let service = new Service();

  app.post('/signIn', async (req, res) => {
    try {
      const idToken = req.headers.usertoken.split(' ')[1];

      await userManager.signIn(idToken);
      res.send('ok');

      } catch(error) {
        console.log(error.message);
  
        res.status(400);
        res.send('Invalid request!');
      }
  });

  app.post('/signUp', async (req, res) => {
    try {
      const idToken = req.headers.usertoken.split(' ')[1];
  
      const name = req.headers.username;
      const email = req.headers.useremail;
      const type = req.headers.usertype;

      await userManager.signUp(idToken, name, email, type);
      res.send('ok')

      } catch(error) {
        console.log(error.message);
  
        res.status(400);
        res.send('Invalid request!');
      }
  });

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
}
startServer();