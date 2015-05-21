class HeaderController {
  constructor($rootScope, $scope, screenSize) {
    $rootScope.mobile = screenSize.is('xs, sm');

    screenSize.on('xs, sm', function(match) {
      $rootScope.mobile = match;
    });
  }
}

HeaderController.$inject = ['$rootScope', '$scope', 'screenSize'];

export default HeaderController

