const { AppService } = require('./src/controller/appService');
const { Logger } = require('./src/logger/logger');

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
  const logger = new Logger('./serverLog.log');

  app.post('/signIn', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];
      console.log(idToken);

      const user = await appService.signIn(idToken);
      logger.log(`SignedIn: ${user.getName()} | ${user.getEmail()} | ${user.getType()}`);

      res.send('ok');

    } catch (error) {
      console.log(error.message);
      logger.error(error.message);

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

      const resData = await appService.signUp(idToken, name, email, type);
      logger.log(`SignedUp: ${resData.user.getName()} | ${resData.user.getEmail()} | ${resData.user.getType()}`);
      logger.log(resData.status.message);

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

  app.post('/add-paper-to-session', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const paperId = req.body.paperId;
      const sessionId = req.body.sessionId;

      await appService.addPaperToSession(idToken, paperId, sessionId);

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

  app.post('/add-session', async(req, res) => {
    try{
      const idToken = req.headers.authorization.split(' ')[1];

      const conferenceId = req.body.conferenceId;
      const name = req.body.name;

      await appService.addSession(idToken, conferenceId, name);

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
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const papers = await appService.getPapers(idToken);

      res.json(papers);
  } catch (error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
  }
  });

  app.get('/get-paper-link', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];
      const paperId = req.body.paperId;

      const paperLink = await appService.getPaperLink(idToken, paperId);
      console.log(paperLink);

      res.send(paperLink);
    } catch (error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
    }
  });

  app.get('/get-sessions', async (req, res) => {
    const idToken = req.headers.authorization.split(' ')[1];

    const conferenceId = req.body.conferenceId;

    const sessions = await appService.getSessions(idToken, conferenceId);
    console.log(sessions);

    res.json(sessions);
  });


  app.get('/get-paper-reviews', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const paperId = req.body.paperId;

      const reviews = await appService.getPaperReviews(idToken, paperId);

      console.log([...reviews.entries()]);

      res.json(reviews);
    } catch (error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
    }
  })

  app.get('/get-paper-comments', async(req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];
      const paperId = req.body.paperId;

      const comments = await appService.getPaperComments(idToken, paperId);

      console.log([...comments.entries()]);
      res.json(comments);
    } catch (error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
    }
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