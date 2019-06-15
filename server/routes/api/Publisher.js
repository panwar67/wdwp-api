const fetch = require('node-fetch');
const mysql      = require('mysql');
const bodyParser = require('body-parser');
const config = require('server/config');
const connection = mysql.createConnection(config);

module.exports = (app) => {
    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    app.get('/publisher/all', (req, res) => {
        connection.query('select * from publisherDATA', function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
    });

    app.post('/publisher/getfeatureduploaded', (req,res)=>{
        var publisherId = req.body.publisherId;
        var sql = "select * from  featuredSTORY where publisherID like '"+publisherId+"'";
        connection.query(sql,'',function (err, result) {
            if(err)throw err;
            res.end(JSON.stringify(result));
        })
    });

    app.post('/publisher/gettasks', (req,res)=>{
        var publisherId = req.body.publisherId;
        var sql = "select * from publisherTASK where publisherID like '"+publisherId+"'";
        connection.query(sql,'',function (err, result) {
            if(err)throw err;
            res.end(JSON.stringify(result));
        })
    });




};