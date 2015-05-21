require('./main.less');
class MainController {
  constructor($rootScope, $scope, screenSize) {
    $rootScope.mobile = screenSize.is('xs, sm');

    screenSize.on('xs, sm', function(match) {
      $rootScope.mobile = match;
    });

  }
}

MainController.$inject = ['$rootScope', '$scope', 'screenSize'];

export default MainController

