//Defining local constants that will be used late on
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 5655; // not default port
const mysql = require('mysql');

//Configuring the body parser to get POSTS late on
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use it before all route definitions
var cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));

//Defining routes - Message to confirm that api is running
const router = express.Router();
router.get('/', (req, res) => res.json({ message: ' The API is Working on browser!' }));
app.use('/', router);

/*router.get('/clients/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Clients' + filter, res);
});*/

//route to get all porject status and project status by id
router.get('/status/:statusID?', (req, res) =>{
  let filter = '';
  if(req.params.statusID) filter = ' WHERE statusID=' + parseInt(req.params.statusID);
  execSQLQuery('SELECT * FROM status' + filter, res);
});

//route to get all usertypes and usertypes by id
router.get('/usertypes/:userTypeID?', (req, res) =>{
  let filter = '';
  if(req.params.userTypeID) filter = ' WHERE userTypeID=' + parseInt(req.params.userTypeID);
  execSQLQuery('SELECT * FROM userType' + filter, res);
});

//route to get all users and users by id
router.get('/users/:userID?', (req, res) =>{
  let filter = '';
  if(req.params.userID) filter = ' WHERE userID=' + parseInt(req.params.userID);
  execSQLQuery('SELECT * FROM user' + filter, res);
});

//route to get all projects and projects by id
router.get('/projects/:projectID?', (req, res) =>{
  let filter = '';
  if(req.params.projectID) filter = ' WHERE projectID=' + parseInt(req.params.projectID);
  execSQLQuery('SELECT * FROM project' + filter, res);
})

//route to get all capstoneGroups and capstoneGroup by id
router.get('/capstoneGroups/:groupID?', (req, res) =>{
  let filter = '';
  if(req.params.groupID) filter = ' WHERE groupID=' + parseInt(req.params.groupID);
  execSQLQuery('SELECT * FROM capstoneGroup' + filter, res);
})

//route to get all capstoneGroups members by capstoneGroup id
router.get('/capstoneGroupsMembers/:groupID?', (req, res) =>{
  let filter = '';
  if(req.params.groupID) filter = ' WHERE groupID=' + parseInt(req.params.groupID);
  execSQLQuery('SELECT userID, username, groupID, groupName FROM user NATURAL JOIN capstoneGroup' + filter, res);
})

//route to get all messages and messages by Project id
router.get('/messages/:projectID?', (req, res) =>{
  let filter = '';
  if(req.params.projectID) filter = ' AND A.projectId=' + parseInt(req.params.projectID);
  execSQLQuery('SELECT A.messageID, A.messageBody, A.projectID, B.projectName, A.userID, C.username FROM message A, project B, user C WHERE A.userID = C.userID AND A.projectID = B.projectID' + filter, res);
})

//Starting the server
app.listen(port);
console.log('API up and running!');

//Connection and Queries into DB
function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host     : '70.65.127.210',
        port     : 80,
        user     : 'admin',
        password : 'nopass',
        database : 'capstoneFinder'
    });
   
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('Query Executed!');
    });
  }