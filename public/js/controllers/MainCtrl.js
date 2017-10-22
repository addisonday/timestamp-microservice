angular.module('MainCtrl', []).controller('MainController', function MainCtrl() {
  var dateVal = req.params.dateVal;

  res.json({unix: dateVal});
});