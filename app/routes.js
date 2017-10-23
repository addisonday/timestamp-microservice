module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  app.get('/:dateVal', function(req, res, next){
    var dateVal = req.params.dateVal;

    res.json({unix: dateVal});
  });

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendFile('./public/index.html');
  });

};