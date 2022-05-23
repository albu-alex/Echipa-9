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
      logger.error(error.message);

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
      logger.log("Submitted paper.")

      res.send('ok');

    } catch (error) {
      logger.error(error.message);

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
      logger.log(`Added review to paper ${paperId}.`);

      res.send('ok');

    } catch (error) {
      logger.error(error.message);

      res.status(400);
      res.send(error.message);
    }
  });

  app.post('/accept-paper', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];
      const paperId = req.body.paperId;

      await appService.acceptPaper(idToken, paperId);
      res.send('ok');
    } catch (error) {
      console.log(error.message);

      res.status(400);
      res.send(error.message);
    }
  })

  app.post('/add-comment', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const comment = req.body.comment;
      const paperId = req.body.paperId;
      await appService.addComment(idToken, comment, paperId);
      logger.log(`Added comment to paper ${paperId}.`);

      res.send('ok');
    } catch (error) {
      logger.error(error.message);

      res.status(400);
      res.send(error.message);
    }
  });

  app.post('/add-session', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const conferenceId = req.body.conferenceId;
      const name = req.body.name;

      await appService.addSession(idToken, conferenceId, name);
      logger.log(`Added a new session to conference ${conferenceId}.`);

      res.send('ok');
    } catch (error) {
      logger.error(error.message);

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
      logger.log(`Added paper ${paperId} to session ${sessionId}.`);

      res.send('ok');
    } catch (error) {
      logger.error(error.message);

      res.status(400);
      res.send(error.message);
    }
  });

  app.get('/get-authors', async (req, res) => {
    const authors = await appService.getUsersByType("author");
    logger.log(authors);
    res.json(authors);
  })

  app.get('/get-reviewers', async (req, res) => {
    const reviewers = await appService.getUsersByType("reviewer");
    logger.log(reviewers);
    res.json(reviewers);
  })

  app.get('/get-papers', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const papers = await appService.getPapers(idToken);
      logger.log(papers);

      res.json(papers);
    } catch (error) {
      logger.error(error.message);

      res.status(400);
      res.send(error.message);
    }
  });

  app.get('/get-paper-link', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];
      const paperId = req.headers.paperid;

      const paperLink = await appService.getPaperLink(idToken, paperId);
      logger.log(paperLink);

      res.send(paperLink);
    } catch (error) {
      logger.error(error.message);

      res.status(400);
      res.send(error.message);
    }
  });

  app.get('/get-sessions', async (req, res) => {
    const idToken = req.headers.authorization.split(' ')[1];

    const conferenceId = req.headers.conferenceid;

    const sessions = await appService.getSessions(idToken, conferenceId);
    logger.log(sessions);

    res.json(sessions);
  });

  app.get('/get-topics', async (req, res) => {
    const idToken = req.headers.authorization.split(' ')[1];
    const conferenceId = req.headers.conferenceid;

    const topics = await appService.getTopics(idToken, conferenceId);
    logger.log(topics);
    res.json(topics);
  })

  app.get('/get-paper-reviews', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];

      const paperId = req.headers.paperid;

      let reviews = await appService.getPaperReviews(idToken, paperId);

      // logger.log('get-paper-reviews-be...')
      logger.log([...reviews.entries()]);

      reviews = Object.fromEntries(reviews);
      res.json(reviews);

    } catch (error) {
      logger.error(error.message);

      res.status(400);
      res.send(error.message);
    }
  })

  app.get('/get-paper-comments', async (req, res) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];
      const paperId = req.headers.paperid;

      let comments = await appService.getPaperComments(idToken, paperId);

      // logger.log('get-paper-comments-be...')
      logger.log([...comments.entries()]);

      comments = Object.fromEntries(comments);
      res.json(comments);

    } catch (error) {
      logger.error(error.message);

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
      logger.log(`Updated user info for ${firstName} ${surname}`);

      res.send('ok');

    } catch (error) {
      logger.error(error.message);

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
      logger.log(`Updated the conference details for ${conferenceId}`);

      res.send('ok');

    } catch (error) {
      logger.error(error.message);

      res.status(400);
      res.send(error.message);
    }
  });


}

startServer();