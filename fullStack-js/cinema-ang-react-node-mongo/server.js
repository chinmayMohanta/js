// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'))
//app.use(express.static(__dirname + '/learnAngular'))

var port = process.env.PORT || 3000;        // set our port

var MongoClient = require('mongodb').MongoClient

var dbConnection= [];

var hello=  function() { console.log('hello .........')}
MongoClient.connect('mongodb://localhost:27017/cinema', function (err, db) {
  if (err) throw err
  dbConnection[0]=db;

  db.collection('films').find().toArray(function (err, result) {
    if (err) throw err
hello()
    //console.log(result)
  })
})

console.log(dbConnection)

/*
dbConnection.collection('films').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
  */







// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:30000/api)
/*
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
*/

/*
// Beginning : Angular Frond-end integration
router.get('/front', function(req, res, next) {
  
  
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

*/

//End : front-end

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

router.route('/front/*')

.get(function(req, res) {
res.sendFile(path.join(__dirname,'public', 'index.html'));
//res.sendFile(path.join(__dirname,'learnAngular', 'index.html'));

})



// API for CRUDE operation
// Create Film

// create a film (accessed at POST http://localhost:30000/api/cinema/film)
router.route('/cinema/film')

.post(function(req, res) {

console.log(req.body)
// save it in db
MongoClient.connect('mongodb://localhost:27017/cinema', function (err, db) {
  if (err) throw err
db.collection('films').update({title:req.body['title']}, {$set:req.body}, {upsert:true}, function(err, result) {
    console.log(result)
    db.collection('films')
   db.close()
   
  })
})

res.json({ message: 'SUCCESS' });

})

// Retrieve a Film

.get(function(req, res) {
res.json({ message: 'Retrieved  a  Film' });
console.log("Retrieved a Film")
})




// Update cinema
.put(function(req, res) {
  console.log("Updated a Film")
res.json({ message: 'Updated a Film' });
console.log(req.body)

//db.films.update({_id:},{$set:{rate:}})

 MongoClient.connect('mongodb://localhost:27017/cinema', function (err, db) {
  if (err) throw err
//db.collection('films').update({title:req.body['title']}, {$set:{rate:parseInt(req.body['rate'])}}, {upsert:true}, function(err, result) {
  db.collection('films').update({title:req.body['title']}, {$inc:{rate:parseInt(req.body['rate'])}}, {upsert:true}, function(err, result) {
    console.log(result)
    db.collection('films')
   db.close()
   
  })
})

})


// Delete a film
.delete(function(req, res) {

MongoClient.connect('mongodb://localhost:27017/cinema', function (err, db) {
  if (err) throw err
db.collection('films').remove(req.query, function(err, result) {
  console.log('delete reslut is')
  
    console.log(result.result)
    if(result.result['ok'] == 1){
      console.log('SUCCESS')
      res.json({ message: 'SUCCESS' });

    }
    
    db.collection('films')
   db.close()
   
  })
})
  
  console.log(req)


})

// Retrieve all films
router.route('/cinema/all')
.get(function(req, res) {

  MongoClient.connect('mongodb://localhost:27017/cinema', function (err, db) {
  if (err) throw err
  

  db.collection('films').find().toArray(function (err, result) {
    if (err) throw err
res.json({ message: result });
    console.log(result)
  })
})



//res.json({ message: 'Retrieve all films' });
console.log("Reteieve all films")
})

// Retrieve all films
router.route('/cinema/rate')
.put(function(req, res) {
res.json({ message: '' });
console.log("rate a movie")
})









// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
