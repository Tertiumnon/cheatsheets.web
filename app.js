angular.module('myApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/:product/:category', {
        templateUrl: 'index.html',
        controller: 'mainController'
      });
  })
  .controller('mainController', ['$scope', '$http', '$location', '$route', '$routeParams', function ($scope, $http, $location, $route, $routeParams) {

    // VARIABLES

    $scope.params = $routeParams;
    //
    $scope.pagetitle = "Cheatsheets";
    $scope.alldata = [];
    $scope.chosendata = [];
    $scope.products = [];
    $scope.versions = [];
    $scope.categories = [];
    $scope.records = [];
    //
    $scope.product, $scope.version, $scope.categorypath;
    $scope.productpath, $scope.categorypath;
    //
    $scope.skinPath = "skins/DarkOrigin";

    // FUNCTIONS

    $scope.remove_duplicates = function (array) {
      let newArray = array.filter(function (elem, pos) {
        return array.indexOf(elem) == pos;
      });
      return newArray;
    };

    $scope.get_options_list = function (arr, prop) {
      let options = [];
      arr.forEach(function (element, index, array) {
        for (let p in element) {
          if (p === prop) {
            options.push(element[p]);
          }
        }
      });
      options = $scope.remove_duplicates(options);
      return options;
    }

    // REQUEST

    $http({
      method: 'GET',
      url: 'src/data/references.json'
    }).then(function successCallback(response) {

      // get data
      $scope.alldata = response.data;

      // get products list
      $scope.products = $scope.get_options_list($scope.alldata, 'Product');

      // products
      $scope.chooseProducts = function (product, category) {
        $scope.productpath = tertium.string_to_link(product);
        $location.path('/' + $scope.productpath);
        $scope.chosendata = $scope.alldata.filter(function (item) {
          return item.Product == product;
        });
        $scope.versions = $scope.get_options_list($scope.chosendata, 'Version');
        $scope.categories = $scope.get_options_list($scope.chosendata, 'Category');
        if (category) {
          $scope.category = category;
          $scope.showRecords(category);
        } else {
          $scope.category = 'all';
          $scope.showRecords('all');
        }
      };

      // version
      // $scope.chooseVersion = function (version) {
      //   $scope.versionpath = tertium.string_to_link(version);
      //   $location.path('/' + $scope.productpath + '/' + $scope.versionpath);
      //   $scope.chosendata = $scope.chosendata.filter(function (item) {
      //     return item.Version == version;
      //   });
      //   $scope.categories = $scope.get_options_list($scope.chosendata, 'Category');
      // };

      // records
      $scope.showRecords = function (category) {
        $scope.categorypath = tertium.string_to_link(category);
        $location.path('/' + $scope.productpath + '/' + $scope.categorypath);
        switch (category) {
          case 'all':
            $scope.records = $scope.chosendata;
            break;
          default:
          $scope.records = $scope.chosendata.filter(function (item) {
            return item.Category == category;
          });
        }

      };

      // location
      let loc = $location.path();
      if (loc) {
        loc = loc.split('/');
        if (loc.length >= 2) {
          $scope.product = loc[1];
          $scope.category = loc[2];
          $scope.chooseProducts($scope.product, $scope.category);
        }
      }

    }, function errorCallback(response) {});

  }]);
