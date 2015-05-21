import './vendor/vendor'
import MainController from './main/main-controller';
import HeaderController from './header/header-controller';

require('./scss/app.scss');

let app = angular.module('MyApp', ['lumx', 'lumx.utils', 'matchMedia', 'ngRoute'])
  .controller('MainController', MainController)
  .controller('HeaderController', HeaderController)
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainController'
      })
      .when('/how-it-works', {
        templateUrl: 'how-it-works/how-it-works.html'
      })
      .when('/faq', {
        templateUrl: 'faq/faq.html'
      })
      .when('/login', {
        templateUrl: 'login/login.html'
      })
      .when('/signup', {
        templateUrl: 'sign-up/sign-up.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

app.run(['$route', function($route) {
  $route.reload();
}]);