// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['bridge.controllers','bridge.services', 'ionic', 'ionic-datepicker', 'firebase', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })
    .state('app.postDetails', {
    url: '/postDetails',
    views: {
      'menuContent': {
        templateUrl: 'templates/postDetails.html'
      }
    }
  })
  .state('app.suggested', {
    url: '/suggested',
    views: {
      'menuContent': {
        templateUrl: 'templates/suggested.html'
      }
    }
  })
    .state('app.charts', {
    url: '/charts',
    views: {
      'menuContent': {
        templateUrl: 'templates/charts.html'
      }
    }
  })
    .state('app.topCategory', {
    url: '/topCategory',
    views: {
      'menuContent': {
        templateUrl: 'templates/topCategory.html'
      }
    }
  })
    .state('app.newest', {
    url: '/newest',
    views: {
      'menuContent': {
        templateUrl: 'templates/newest.html'
      }
    }
  })
    .state('app.mostRecent', {
    url: '/mostRecent',
    views: {
      'menuContent': {
        templateUrl: 'templates/mostRecent.html'
      }
    }
  })
  .state('app.categories', {
    url: '/categories',
    views: {
      'menuContent': {
        templateUrl: 'templates/categories.html'
      }
    }
  })
    .state('app.musicians', {
    url: '/musicians',
    views: {
      'menuContent': {
        templateUrl: 'templates/musicians.html'
      }
    }
  })
    .state('app.actors', {
    url: '/actors',
    views: {
      'menuContent': {
        templateUrl: 'templates/actors.html'
      }
    }
  })
    .state('app.comedians', {
    url: '/comedians',
    views: {
      'menuContent': {
        templateUrl: 'templates/comedians.html'
      }
    }
  })
    .state('app.models', {
    url: '/models',
    views: {
      'menuContent': {
        templateUrl: 'templates/models.html'
      }
    }
  })
    .state('app.athletes', {
    url: '/athletes',
    views: {
      'menuContent': {
        templateUrl: 'templates/athletes.html'
      }
    }
  })
    .state('app.misc', {
    url: '/misc',
    views: {
      'menuContent': {
        templateUrl: 'templates/misc.html',
      }
    }
  })
  .state('app.celebprofile', {
    url: '/celebprofile',
    views: {
      'menuContent': {
        templateUrl: 'templates/celebprofile.html'
      }
    }
  })
  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
        }
      }
    })
    .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html'
      }
    }
  })
  .state('app.faq', {
    url: '/faq',
    views: {
      'menuContent': {
        templateUrl: 'templates/faq.html',
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
