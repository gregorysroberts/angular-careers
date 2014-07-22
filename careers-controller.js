var careersApp = angular.module('careersApp', []);

careersApp.controller('AdminJobCtrl', function ($scope, $http) {

    $http.jsonp("http://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full?alt=json-in-script&callback=JSON_CALLBACK")
        .success(function(data){
            console.log(data);
            $scope.jobs= data;
        })
});

careersApp.controller('ClientJobCtrl', function ($scope, $http) {

    $http.jsonp("http://spreadsheets.google.com/feeds/list/1R2j4Nki5Ok-4vNJp7Y2W4I9hai-CEU6_kLsPlAPWtNs/od6/public/full?alt=json-in-script&callback=JSON_CALLBACK")
        .success(function(data){
            console.log(data);
            $scope.jobs= data;
        })
});

careersApp.controller('MarketingJobCtrl', function ($scope, $http) {

    $http.jsonp("http://spreadsheets.google.com/feeds/list/1OOCQKFXAXYKqydjP2judL7mbhyvFsOofLhIWNKCN9Z0/od6/public/full?alt=json-in-script&callback=JSON_CALLBACK")
        .success(function(data){
            console.log(data);
            $scope.jobs= data;
        })
});

careersApp.controller('SystemsJobCtrl', function ($scope, $http) {

    $http.jsonp("http://spreadsheets.google.com/feeds/list/1rjLUvILaoh5WuGPUZ-0iWANtKJQgk0qEaBkgipRePs0/od6/public/full?alt=json-in-script&callback=JSON_CALLBACK")
        .success(function(data){
            console.log(data);
            $scope.jobs= data;
        })
});

careersApp.controller('SalesJobCtrl', function ($scope, $http) {

    $http.jsonp("http://spreadsheets.google.com/feeds/list/1Q0LMYAgWadOhU0d50T6Mm51iGVP9IUbhW-M3cpp9HnE/od6/public/full?alt=json-in-script&callback=JSON_CALLBACK")
        .success(function(data){
            console.log(data);
            $scope.jobs= data;
        })
});

careersApp.controller('DevJobCtrl', function ($scope, $http) {

    $http.jsonp("http://spreadsheets.google.com/feeds/list/1qXJNBgDYrimBvwnwuv6ZitUD9ONF2Y-02RcQhr0YSyo/od6/public/full?alt=json-in-script&callback=JSON_CALLBACK")
        .success(function(data){
            console.log(data);
            $scope.jobs= data;
        })
});
