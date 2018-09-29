var myApp = angular.module('myApp',["ngRoute"]);

myApp.config(function($routeProvider , $locationProvider) {
// $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider
  .when("/colors", {
    templateUrl:"partials/colors.html"
  })
  .when("/employee" , {
    templateUrl:"partials/employee.html"
  })
   .when("/employee/:nameId" , {
    templateUrl:"partials/employeeDetails.html"
  })
  .when("/technology",{
    templateUrl:"partials/technology.html"
  })
    .when("/sorting",{
    templateUrl:"partials/sort.html"
  })

  .when("/",{
    templateUrl:"partials/colors.html"
  })

  .otherwise({
    template:"<h2>page not found.</h2>"
  });



});

 
myApp.controller('myController',['$scope','$route',function($scope,$route){
$scope.colors = [
 {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    },
];

$scope.reloadData = function(){
  
  $route.reload();
}

}]);

myApp.controller('techController',['$scope',function($scope){
	
$scope.technologies = [
{name : "C#", likes:0 , dislikes:0},
{name : "ASP", likes:0 , dislikes:0},
{name : "JAVA", likes:0 , dislikes:0},
{name : "ANGULAR", likes:0 , dislikes:0}

];

$scope.add = function(tech){
	tech.likes++;
}

$scope.sub = function(tech){
	tech.dislikes++;
}

}]);

myApp.controller('filterController', ['$scope','$routeParams', function($scope,$routeParams){

  $scope.employees = [ 
{"name" : "BEN" , "dateOfBirth" : new Date("November 23,1980") , gender : ' male ', salary : 55000.788} ,
{"name" : "SARA" , "dateOfBirth" : new Date("May 05,1970") , gender : ' female ', salary : 68000} ,
{"name" : "MARK" , "dateOfBirth" : new Date("August 15,1974") , gender : ' male ', salary : 57000} ,
{"name" : "PAM" , "dateOfBirth" : new Date("October 27,1979") , gender : ' female ', salary : 53000} ,
{"name" : "TODD" , "dateOfBirth" : new Date("December 30,1983") , gender : ' male ', salary : 60000} 
 
    ];

    $scope.rowLimit = 3;
  
    $scope.nameItem = $routeParams.nameId;
  
}]);

myApp.controller('sortController', ['$scope', function($scope){

  $scope.employees = [ 
{name : 'BEN' , dateOfBirth : new Date("November 23,1980") , gender : ' male ', salary : 55000.788} ,
{name : 'SARA' , dateOfBirth : new Date("May 05,1970") , gender : ' female ', salary : 68000} ,
{name : 'MARK' , dateOfBirth : new Date("August 15,1974") , gender : ' male ', salary : 57000} ,
{name : 'PAM' , dateOfBirth : new Date("October 27,1979") , gender : ' female ', salary : 53000} ,
{name : 'TODD' , dateOfBirth : new Date("December 30,1983") , gender : ' male ', salary : 60000} 

    ];



  $scope.sortFunc = function(value){
  if($scope.sortColumn){
     $scope.sortColumn =  value ;
     $scope.sortRev = !$scope.sortRev;
   }
    else  { 
      $scope.sortColumn = value;
    $scope.sortRev = true;
    }


    

  }
 
}]);