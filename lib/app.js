let myApp = angular.module('plunker', ["ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider.when("/main", {
        templateUrl:'main.html',
        controller: 'MainCtrl'
    }).when("/user/:username",{
        templateUrl: "user.html",
        controller:"UserController"
    }).when("/repo/:username/:reponame",{
        templateUrl: "repo.html",
        controller:"RepoController"
    }) .otherwise({redirectTo:'/main'})
})