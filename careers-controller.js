var careersApp = angular.module('careersApp', []);

careersApp.controller('JobCtrl', function ($scope, $http) {

    $http.jsonp("http://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full?alt=json-in-script" + "&callback=JSON_CALLBACK")
        .success(function(data){
            console.log(data);
            $scope.jobs= data;
        })
});