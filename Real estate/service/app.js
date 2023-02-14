const express = require('express');
const ejs = require('ejs');
const cors = require('cors');
const app = express();

const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_restapi'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected with App...');
});


app.get('/api/items/:id',(req, res) => {
    let sqlQuery = "SELECT * FROM details WHERE id=" + req.params.id;
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(apiResponse(results));
    });
  });

  

  // app.get('/api/data/:id',(req, res) => {
  //   let sqlQuery = "SELECT * FROM data WHERE id=" + req.params.id;
      
  //   let query = conn.query(sqlQuery, (err, results) => {
  //     if(err) throw err;
  //     res.send(apiResponse(results));
  //   });
  // });

  app.get('/api/get', (req,res) => {
    let sqlQuery = "SELECT * FROM DETAILS";

    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
  });

  app.get('/api/locations', (req,res) => {
    let sqlQuery = "SELECT * FROM sell";

    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
  });


  app.get('/api/locations/flats', (req,res) => {
    let sqlQuery = "SELECT * FROM sell WHERE Category = 'Flat' ";

    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
  });

  app.get('/api/locations/farm', (req,res) => {
    let sqlQuery = "SELECT * FROM sell WHERE Category = 'Farm' ";

    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
  });

  app.get('/api/locations/house', (req,res) => {
    let sqlQuery = "SELECT * FROM sell WHERE Category = 'House' ";

    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
  });

  app.get('/api/locations/office', (req,res) => {
    let sqlQuery = "SELECT * FROM sell WHERE Category = 'Office' ";

    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
  });

  app.get('/api/locations/pent', (req,res) => {
    let sqlQuery = "SELECT * FROM sell WHERE Category = 'Pent' ";

    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
  });

  app.get('/api/locations/show', (req,res) => {
    let sqlQuery = "SELECT * FROM sell WHERE Category = 'Showroom' ";

    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
  });

  app.post("/api/items", (req, res) => {
    let data = { name: req.body.name, age: req.body.age, email: req.body.email, phone: req.body.phone, password: req.body.password };
  
    let sqlQuery = "INSERT INTO details SET ?";
  
    let query = conn.query(sqlQuery, data, (err, results) => {
      if (err) throw err;
      res.send(apiResponse(results));
    });
  });


  app.post("/api/addloc", (req, res) => {
    let data = { Location: req.body.Location, Category: req.body.Category, LandMark: req.body.LandMark, Contact: req.body.Contact};
  
    let sqlQuery = "INSERT INTO sell SET ?";
  
    let query = conn.query(sqlQuery, data, (err, results) => {
      if (err) throw err;
      res.send(apiResponse(results));
    });
  });




  app.put('/api/items/:id',(req, res) => {
    let sqlQuery = "UPDATE items SET title='"+req.body.title+"', body='"+req.body.body+"' WHERE id="+req.params.id;
    
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(apiResponse(results));
    });
  });


  app.delete('/api/items/:id',(req, res) => {
    let sqlQuery = "DELETE FROM sell WHERE id="+req.params.id+"";
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
        res.send(apiResponse(results));
    });
  });


  app.post('/login',(req, res) => {

    const name = req.body.name;
    const password = req.body.password;
    

    conn.query("SELECT * FROM details WHERE name = ? AND password = ?", [name, password], (err,result) => {
      if(err) {
        res.send({err: err})
      }

      if(result){
        res.send(result)
      } else{
        res.send({message: "wrong name/password combination!! "});
      }
    })
    
  });
  
  
  
  


  function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}

/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(3000,() =>{
  console.log('Server started on port 3090...');
});

