/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
// Import the admin library.
const admin = require('firebase-admin');
// We initialize the admin library.
admin.initializeApp();

// From the admin library, we invoke the firestore module.
const firestore = admin.firestore();

 exports.get = onRequest(async(request, response) => {
//   logger.info("Hello logs!", {structuredData: true});

// We execute an insertion inside the users collection of the object {name:'Jesse'}
const result = await firestore.collection('users').add({name:'Jesse'})
// I return the result to the navigator
 response.send(result);
   
 });

 exports.post = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello I am a POST!");
});
