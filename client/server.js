const { UserManager } = require('./src/controller/userManager');

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

async function startServer() {
  let userManager = new UserManager();

  app.post('/login', async (req, res) => {    // ! Might be vulnerable to XSS
    const uid = req.headers.usertoken.split(' ')[1];
    const name = req.headers.username;
    const email = req.headers.useremail;
    const type = req.headers.usertype;
    console.log(`>>> Received: ${uid} | ${name} | ${email} | ${type}`);

    await userManager.manageNewConnection(uid, name, email, type);

    res.send('ok');
  })
}
startServer();