var express = require('express');
var router = express.Router();
// import postgres from '../db/postgres';

var postgres = require('../db/postgres');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  
   const n = await postgres.getFoodItems1();
   
 
  
res.statusCode = 200
  // res.send('respond with a resource ',result);
  console.log('------n:', res.statusCode);
  res.send(n);
});

module.exports = router;