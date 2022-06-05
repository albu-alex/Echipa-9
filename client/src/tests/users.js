const { User } = require('../Entities/user');
const { admin } = require('../config/firebaseConfig');
const { db } = require('../config/firebaseConfig');
const assert = require("assert");
const {UserManager} = require("../controller/userManager");
const {Conference} = require("../Entities/conference");
const {PaperManager} = require("../controller/paperManager");
const {Session} = require("../Entities/session");

async function testUserFromFirestone()
{
    const uid = "jUdjrrsWM3VPjhZ2jRKGc8VZ8m32"
    const userRef = db.collection('Users').doc(uid);
    const doc = await userRef.get();
    const user  = User.fromFirestore(uid, doc.data());
    assert.equal(user.getPhoneNumber(), '0747021840')
}

async function testUserToFirestone()
{
    const uid = "jUdjrrsWM3VPjhZ2jRKGc8VZ8m32"
    const userRef = db.collection('Users').doc(uid);
    const doc = await userRef.get();
    let retrievedUser = User.fromFirestore(uid, doc.data());
    const oldAddress = retrievedUser.getAddress()
    const newAddress = 'addressChangedByTest@gmail.com';
    retrievedUser.setAddress(newAddress)
    // console.log("Address changed for " + retrievedUser.getName() + " from: " + oldAddress + " to: " + newAddress);
    await db.collection('Users').doc(uid).set(retrievedUser.toFirestore());
    const modifiedUserRef = db.collection('Users').doc(uid);
    const doc1 = await modifiedUserRef.get();
    let modifiedUser = User.fromFirestore(uid, doc1.data());
    assert.equal(modifiedUser.getAddress(), 'addressChangedByTest@gmail.com')
    modifiedUser.setAddress(oldAddress)
    await db.collection('Users').doc(uid).set(modifiedUser.toFirestore());
}


async function testGetUsersByType()
{
    const userManager = new UserManager();
    let existingType = "author";
    let missingType = "spectator"

    let authors;
    authors = await userManager.getUsersByType(existingType);
    let anonymous;
    anonymous = await userManager.getUsersByType(missingType);
    // console.log("There are: " + authors.length + " persons with type " + existingType + " in the database")
    // console.log("There are: " + anonymous.length + " persons with type " + missingType + " in the database")
    assert.equal(anonymous.length,0)
    assert.notEqual(authors.length,0)
}

async function testUpdateUserInformation()
{
    const userManager = new UserManager();
    const uid = "jUdjrrsWM3VPjhZ2jRKGc8VZ8m32"
    let updatedUser = await userManager.updateUserInformation(uid, 'Elina', 'Barabas', '0747021840', 'elina@gmail.com', 'elina@gmail.com', 'testing');
    assert.equal(updatedUser.getPhoneNumber(),'0747021840')
}

async function testGetTopics()
{
    let conferenceId ="99PN0HXy9GmArJN67VIh";
    const userManager = new UserManager();
    let topics = await userManager.getTopics(conferenceId);
    assert.equal(topics,"sports")

}

async function testUpdateConferenceInformation()
{
    const userManager = new UserManager();
    const conferenceId = "99PN0HXy9GmArJN67VIh"
    const chairId = "zJypcPg3DOfuG305iLbFx9UpRqH3"
    const name = "Evolution of Sports - Conference"
    const date = "23.05.2022"
    const dlPaperSubmission = "25.05.2022"
    const dlPaperReview = "25.05.2022"
    const dlPaperAccept = "26.05.2022"
    const dlCameraReady = "26.05.2022"
    const topics = "sports"
    const urls = "www.sports.com"
    await userManager.updateConferenceInformation(chairId, conferenceId, name, date, urls, topics, dlPaperSubmission, dlPaperReview, dlPaperAccept, dlCameraReady)

    const conferenceRef = db.collection("Conferences").doc(conferenceId);
    const doc = await conferenceRef.get();
    let conference = Conference.fromFirestore(conferenceId, doc.data());

    assert.equal(conference.getChairId(),"zJypcPg3DOfuG305iLbFx9UpRqH3")

}

async function testGetPaperReviews()
{
    const paperManager = new PaperManager()
    let paperReviews = await paperManager.getPaperReviews("CA27L3UTamWyZ4K2AKpa")
    assert(paperReviews.has('43nB28ahtwNgVEsBhvBGHNWmMAi2'))

}

async function testGetPaperComments()
{
    const paperManager = new PaperManager()
    let paperComments = await paperManager.getPaperComments("CA27L3UTamWyZ4K2AKpa")
    assert.equal(paperComments.get('43nB28ahtwNgVEsBhvBGHNWmMAi2'), 'yonder')
}

async function testAddSession()
{
    const paperManager = new PaperManager()
    const conferenceId = "99PN0HXy9GmArJN67VIh"
    const sessionName = "Session for sports in teams"
    const id = await paperManager.addSession(conferenceId, sessionName)
    let sessions = await paperManager.getSessions(conferenceId)
    assert(sessions.includes(id))
}


function tests()
{
    console.log("\n");
    testUpdateUserInformation().then(() => console.log("Test updating user information passed \n"))
    testUserFromFirestone().then(() => console.log("Test retrieving data from firestone passed\n"))
    testUserToFirestone().then(() => console.log("Test sending data to firestone passed\n"))
    testGetUsersByType().then(() => console.log("Test getting users by type passed\n"))
    testGetTopics().then(() => console.log("Test getting topics based on conference passed\n"))
    testUpdateConferenceInformation().then(() => console.log("Test updating conference information passed\n"))
    testGetPaperReviews().then(() => console.log("Test getting paper reviews passed\n"))
    testGetPaperComments().then(() => console.log("Test getting paper comments passed\n"))
    // testAddSession().then("Test adding sessions passed\n")
}

// tests()