var fs = require("fs");

module.exports=function (req, res) {
   fs.readFile( "data/graph.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
};