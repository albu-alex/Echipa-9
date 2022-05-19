const { AppService } = require('./src/controller/appService');

const express = require('express');
const bp = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

const multer = require('multer');
let storage = multer.memoryStorage();
let upload = multer({ storage: storage });


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Listening on port ${port}`));

async function startServer() {
  const appService = new AppService();

  app.post('/signIn', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];
      console.log(idToken);

      await appService.signIn(idToken);
      res.send('ok');

      } catch(error) {
        console.log(error.message);
  
        res.status(400);
        res.send(error.message);
      }
  });

  app.post('/signUp', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];
  
      const name = req.headers.username;
      const email = req.headers.useremail;
      const type = req.headers.usertype;

      await appService.signUp(idToken, name, email, type);
      res.send('ok')

      } catch(error) {
        console.log(error.message);
  
        res.status(400);
        res.send(error.message);
      }
  });

  app.post('/submit-paper', upload.single('paper'), async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const paperData = JSON.parse(req.headers.paperdata);
      const file = req.file;

      await appService.uploadPaper(idToken, paperData, file);

      res.send('ok');

    } catch(error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
    }
  });

  app.post('/add-review', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const review = req.body.review;
      const paperId = req.body.paperId;

      await appService.addReview(idToken, review, paperId);

      res.send('ok');

    } catch(error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
    }
  });


  app.get('/get-papers', async (req, res) => {
    const idToken = req.headers.authorization.split(' ')[1];

    const papers = await appService.getPapers(idToken);
    console.log(papers);

    res.json(papers);
  });

}

startServer();