var careersApp = angular.module('careersApp', []);

careersApp.controller('JobCtrl', function ($scope, $http) {

    $http.jsonp("http://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full?alt=json-in-script" + "&callback=JSON_CALLBACK")
        .success(function(data){
            console.log(data);
            $scope.parks = data;
        })

    // $scope.jobs = 

    // {
    //     "version": "1.0",
    //     "encoding": "UTF-8",
    //     "feed": {
    //         "xmlns": "http://www.w3.org/2005/Atom",
    //         "xmlns$openSearch": "http://a9.com/-/spec/opensearchrss/1.0/",
    //         "xmlns$gsx": "http://schemas.google.com/spreadsheets/2006/extended",
    //         "id": {
    //             "$t": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full"
    //         },
    //         "updated": {
    //             "$t": "2014-06-11T18:33:04.503Z"
    //         },
    //         "category": [
    //             {
    //                 "scheme": "http://schemas.google.com/spreadsheets/2006",
    //                 "term": "http://schemas.google.com/spreadsheets/2006#list"
    //             }
    //         ],
    //         "title": {
    //             "type": "text",
    //             "$t": "Sheet1"
    //         },
    //         "link": [
    //             {
    //                 "rel": "alternate",
    //                 "type": "application/atom+xml",
    //                 "href": "https://docs.google.com/spreadsheets/d/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/pubhtml"
    //             },
    //             {
    //                 "rel": "http://schemas.google.com/g/2005#feed",
    //                 "type": "application/atom+xml",
    //                 "href": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full"
    //             },
    //             {
    //                 "rel": "http://schemas.google.com/g/2005#post",
    //                 "type": "application/atom+xml",
    //                 "href": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full"
    //             },
    //             {
    //                 "rel": "self",
    //                 "type": "application/atom+xml",
    //                 "href": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full?alt=json"
    //             }
    //         ],
    //         "author": [
    //             {
    //                 "name": {
    //                     "$t": "groberts.isdc"
    //                 },
    //                 "email": {
    //                     "$t": "groberts.isdc@gmail.com"
    //                 }
    //             }
    //         ],
    //         "openSearch$totalResults": {
    //             "$t": "3"
    //         },
    //         "openSearch$startIndex": {
    //             "$t": "1"
    //         },
    //         "entry": [
    //             {
    //                 "id": {
    //                     "$t": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full/cokwr"
    //                 },
    //                 "updated": {
    //                     "$t": "2014-06-11T18:33:04.503Z"
    //                 },
    //                 "category": [
    //                     {
    //                         "scheme": "http://schemas.google.com/spreadsheets/2006",
    //                         "term": "http://schemas.google.com/spreadsheets/2006#list"
    //                     }
    //                 ],
    //                 "title": {
    //                     "type": "text",
    //                     "$t": "Internal Security Auditor"
    //                 },
    //                 "content": {
    //                     "type": "text",
    //                     "$t": "description: The Internal Security Auditor is responsible for preparing the company for SOC1 and PCI audits. We need someone who is eager to learn, confident in his/her skills, and comfortable working with people in large and small groups., post: TRUE, url: /careers/security-auditor"
    //                 },
    //                 "link": [
    //                     {
    //                         "rel": "self",
    //                         "type": "application/atom+xml",
    //                         "href": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full/cokwr"
    //                     }
    //                 ],
    //                 "gsx$position": {
    //                     "$t": "Internal Security Auditor"
    //                 },
    //                 "gsx$description": {
    //                     "$t": "The Internal Security Auditor is responsible for preparing the company for SOC1 and PCI audits. We need someone who is eager to learn, confident in his/her skills, and comfortable working with people in large and small groups."
    //                 },
    //                 "gsx$post": {
    //                     "$t": "FALSE"
    //                 },
    //                 "gsx$url": {
    //                     "$t": "/careers/security-auditor"
    //                 }
    //             },
    //             {
    //                 "id": {
    //                     "$t": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full/cpzh4"
    //                 },
    //                 "updated": {
    //                     "$t": "2014-06-11T18:33:04.503Z"
    //                 },
    //                 "category": [
    //                     {
    //                         "scheme": "http://schemas.google.com/spreadsheets/2006",
    //                         "term": "http://schemas.google.com/spreadsheets/2006#list"
    //                     }
    //                 ],
    //                 "title": {
    //                     "type": "text",
    //                     "$t": "Executive Assistant"
    //                 },
    //                 "content": {
    //                     "type": "text",
    //                     "$t": "description: The Executive Assistant will provide administrative support to the InsideSales.com executive team., post: TRUE, url: /careers/executive-assistant"
    //                 },
    //                 "link": [
    //                     {
    //                         "rel": "self",
    //                         "type": "application/atom+xml",
    //                         "href": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full/cpzh4"
    //                     }
    //                 ],
    //                 "gsx$position": {
    //                     "$t": "Executive Assistant"
    //                 },
    //                 "gsx$description": {
    //                     "$t": "The Executive Assistant will provide administrative support to the InsideSales.com executive team."
    //                 },
    //                 "gsx$post": {
    //                     "$t": "TRUE"
    //                 },
    //                 "gsx$url": {
    //                     "$t": "/careers/executive-assistant"
    //                 }
    //             },
    //             {
    //                 "id": {
    //                     "$t": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full/cre1l"
    //                 },
    //                 "updated": {
    //                     "$t": "2014-06-11T18:33:04.503Z"
    //                 },
    //                 "category": [
    //                     {
    //                         "scheme": "http://schemas.google.com/spreadsheets/2006",
    //                         "term": "http://schemas.google.com/spreadsheets/2006#list"
    //                     }
    //                 ],
    //                 "title": {
    //                     "type": "text",
    //                     "$t": "Procurement Specialist"
    //                 },
    //                 "content": {
    //                     "type": "text",
    //                     "$t": "description: As we manage our company’s explosive growth, we need someone who can develop and maintain quality vendor relationships that will leverage our growth, as well as work effectively with internal departments to identify purchasing needs. We are looking for a highly responsive professional who is an expert at identifying and resolving concerns in order to come to beneficial outcomes., post: TRUE, url: /careers/procurement-specialist"
    //                 },
    //                 "link": [
    //                     {
    //                         "rel": "self",
    //                         "type": "application/atom+xml",
    //                         "href": "https://spreadsheets.google.com/feeds/list/10MALD_MqbRCOCVLGwRbPBCIs-EGzReV5c6XsiAowZk4/od6/public/full/cre1l"
    //                     }
    //                 ],
    //                 "gsx$position": {
    //                     "$t": "Procurement Specialist"
    //                 },
    //                 "gsx$description": {
    //                     "$t": "As we manage our company’s explosive growth, we need someone who can develop and maintain quality vendor relationships that will leverage our growth, as well as work effectively with internal departments to identify purchasing needs. We are looking for a highly responsive professional who is an expert at identifying and resolving concerns in order to come to beneficial outcomes."
    //                 },
    //                 "gsx$post": {
    //                     "$t": "TRUE"
    //                 },
    //                 "gsx$url": {
    //                     "$t": "/careers/procurement-specialist"
    //                 }
    //             }
    //         ]
    //     }
    // }
});