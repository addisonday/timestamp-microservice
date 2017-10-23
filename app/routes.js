module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  app.get('/:dateVal', function(req, res, next){
    var dateVal = req.params.dateVal;

    var dateFormat = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    if(isNaN(dateVal)){
      var naturalDate = new Date(dateVal);
      naturalDate = naturalDate.toLocaleString("en-us", dateFormat);
      var unixDate = new Date(dateVal).getTime()/1000;
    } else{
      var unixDate = dateVal;
      var naturalDate = new Date(dateVal * 1000)
      naturalDate = naturalDate.toLocaleString("en-us", dateFormat);
    }

    res.json({unix: unixDate, natural: naturalDate});
  });

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendFile('./public/index.html');
  });

};