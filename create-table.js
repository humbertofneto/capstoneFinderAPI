/*const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '70.65.127.210',
  port     : 80,
  user     : 'admin',
  password : 'nopass',
  database : 'studyReact'
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('Conection Successful!');
  createTable(connection);
})

/*function createTable(conn){
 
    const sql = "CREATE TABLE IF NOT EXISTS Clients (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "Name varchar(150) NOT NULL,\n"+
                "SIN char(11) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('Table Created!');
        addRows(connection)
    });
}*/
	
/*function addRows(conn){
  const sql = "INSERT INTO Clients(Name,SIN) VALUES ?";
  const values = [
        ['test1', '12345678901'],
        ['test2', '09876543210'],
        ['test3', '12312312399']
      ];

  conn.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('Rows added !');
          conn.end();//Close connection
      });
}*/ 