const fetch = require('node-fetch');
const mysql      = require('mysql');
const bodyParser = require('body-parser');
const config = require('server/config');
const connection = mysql.createConnection(config);

module.exports = (app) => {
    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    app.get('/feat/all', (req, res) => {
        connection.query('select * from featuredSTORY', function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
    });

    app.get('/feat/list', (req, res) => {
        connection.query('select storyID, storyAUTHOR, storyDAY, storyIMAGE, storyTAGS, storyTIME, storyTITLE from featuredSTORY', function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
    });

    app.post('/feat/add', (req,res)=>{
        var storyID = req.body.storyID;
        var storyAUTHOR = req.body.storyAUTHOR;
        var storyDAY = req.body.storyDAY;
        var storyIMAGE = req.body.storyIMAGE;
        var storyTAGS = req.body.storyTAGS;
        var storyTEXT = req.body.storyTEXT;
        var storyTIME = req.body.storyTIME;
        var storyTITLE = req.body.storyTITLE;
        var publisherId = req.body.publisherID;
        var sql = "insert into featuredSTORY(storyID, storyAUTHOR, storyDAY, storyIMAGE, storyTAGS, storyTEXT, storyTIME, storyTITLE, storyfeatIMAGE, publisherId) " +
            "values ('"+storyID+"','"+storyAUTHOR+"','"+storyDAY+"','"+storyIMAGE+"','"+storyTAGS+"','"+storyTEXT+"','"+storyTIME+"','"+storyTITLE+"','"+storyIMAGE+"','"+publisherId+"')";
        connection.query(sql,'',function (err, result) {
            if(err)throw err;
            res.end(storyID);
        })
    });

    app.post('/feat/update', (req,res)=>{
        var storyID = req.body.storyID;
        var storyAUTHOR = req.body.storyAUTHOR;
        var storyDAY = req.body.storyDAY;
        var storyIMAGE = req.body.storyIMAGE;
        var storyTAGS = req.body.storyTAGS;
        var storyTEXT = req.body.storyTEXT;
        var storyTIME = req.body.storyTIME;
        var storyTITLE = req.body.storyTITLE;
        var sql = "update featuredSTORY  set storyAUTHOR ='"+storyAUTHOR+"', storyDAY='"+storyDAY+"', storyIMAGE='"+storyIMAGE+"', storyTAGS='"+storyTAGS+"', " +
            "storyTEXT='"+storyTEXT+"', storyTIME='"+storyTIME+"', storyTITLE='"+storyTITLE+"' where storyID='"+storyID+"'";
        connection.query(sql,'',function (err, result) {
            if(err)throw err;
            res.end(storyID);
        })
    });

    app.post('/feat/search', (req,res)=>{
        var column = req.body.column;
        var tag = req.body.tag;
        var sql = "select storyID, storyAUTHOR, storyDAY, storyIMAGE, storyTAGS, storyTIME, storyTITLE from featuredSTORY where "+column+" like '%"+tag+"%'";
        connection.query(sql,'',function (err, result) {
            if(err)throw err;
            res.end(JSON.stringify(result));
        })
    });

    app.post('/feat/getbyid', (req,res)=>{
        var tag = req.body.tag;
        var sql = "select storyID, storyAUTHOR, storyDAY, storyIMAGE, storyTAGS, storyTIME, storyTITLE from featuredSTORY where storyID like '"+tag+"'";
        connection.query(sql,'',function (err, result) {
            if(err)throw err;
            res.end(JSON.stringify(result));
        })
    });

    app.post('/feat/getallbyid', (req,res)=>{
        var tag = req.body.tag;
        var sql = "select * from featuredSTORY where storyID like '"+tag+"'";
        connection.query(sql,'',function (err, result) {
            if(err)throw err;
            res.end(JSON.stringify(result));
        })
    });

    app.post('/feat/deletebyid', (req,res)=>{
        var tag = req.body.tag;
        var sql = "delete from featuredSTORY where storyID = '"+tag+"'";
        connection.query(sql,'',function (err, result) {
            if(err)throw err;
            res.end(JSON.stringify(result.affectedRows));
        })
    });

};