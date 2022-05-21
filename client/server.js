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

    } catch (error) {
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

    } catch (error) {
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

    } catch (error) {
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

    } catch (error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
    }
  });


  app.post('/add-comment', async(req, res) => {
    try{
        const idToken = req.headers.authorization.split(' ')[1];

        const comment = req.body.comment;
        const paperId  = req.body.paperId;
        await appService.addComment(idToken, comment, paperId);

        res.send('ok');
    }catch(error) {
      console.log(error.message);
    
      res.status(400);
      res.send(error.message);
    }
  });

  app.get('/get-authors', async(req, res) => {
    const authors = await appService.getUsersByType("author");
    console.log(authors);
    res.json(authors);
  })

  app.get('/get-reviewers', async(req, res) => {
    const reviewers = await appService.getUsersByType("reviewer");
    console.log(reviewers);
    res.json(reviewers);
  })

  app.get('/get-papers', async (req, res) => {
    const idToken = req.headers.authorization.split(' ')[1];

    const papers = await appService.getPapers(idToken);
    console.log(papers);

    res.json(papers);
  });

  app.get('/get-paper-reviews', async (req, res) => {
    const idToken = req.headers.authorization.split(' ')[1];

    const paperId = req.body.paperId;

    const reviews = await appService.getPaperReviews(idToken, paperId);

    console.log([...reviews.entries()]);

    res.json(reviews);
  })

  app.get('/get-paper-comments', async(req, res) => {
    const idToken = req.headers.authorization.split(' ')[1];
    const paperId = req.body.paperId;

    const comments = await appService.getPaperComments(idToken, paperId);

    console.log([...comments.entries()]);
    res.json(comments);
  })

  app.post('/save-user-data', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const firstName = req.body.firstName;
      const surname = req.body.surname;
      const phoneNo = req.body.phoneNumber;
      const webpage = req.body.webpage;
      const topics = req.body.topics;

      await appService.updateUserInformation(idToken, firstName, surname, phoneNo, webpage, topics);

      res.send('ok');

    } catch (error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
    }
  });

  app.post('/save-conference-data', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const name = req.body.name;
      const date = req.body.date;
      const url = req.body.url;
      const topics = req.body.topics;
      const dlPaperSubmission = req.body.dlPaperSubmission;
      const dlPaperReview = req.body.dlPaperReview;
      const dlPaperAccept = req.body.dlPaperAccept;
      const dlCameraReady = req.body.dlCameraReady;
      const conferenceId = req.body.conferenceId;

      await appService.updateConferenceInformation(idToken, conferenceId, name, date, url, topics, dlPaperSubmission, dlPaperReview, dlPaperAccept, dlCameraReady);

      res.send('ok');

    } catch(error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
    }
  });


}

startServer();