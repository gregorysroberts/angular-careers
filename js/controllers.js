var careersApp = angular.module('careersApp', []);

careersApp.controller('JobCtrl', function ($scope) {
  $scope.jobs = [
    {
        "gsx$position": {
            "$t": "Internal Security Auditor"
        },
        "gsx$description": {
            "$t": "The Internal Security Auditor is responsible for preparing the company for SOC1 and PCI audits. We need someone who is eager to learn, confident in his/her skills, and comfortable working with people in large and small groups."
        },
        "gsx$post": {
            "$t": "TRUE"
        }
    },
    {
        "gsx$position": {
            "$t": "Executive Assistant"
        },
        "gsx$description": {
            "$t": "The Executive Assistant will provide administrative support to the InsideSales.com executive team."
        },
        "gsx$post": {
            "$t": "TRUE"
        }
    },
    {
        "gsx$position": {
            "$t": "Procurement Specialist"
        },
        "gsx$description": {
            "$t": "As we manage our company’s explosive growth, we need someone who can develop and maintain quality vendor relationships that will leverage our growth, as well as work effectively with internal departments to identify purchasing needs. We are looking for a highly responsive professional who is an expert at identifying and resolving concerns in order to come to beneficial outcomes."
        },
        "gsx$post": {
            "$t": "TRUE"
        }
    }
  ];
});