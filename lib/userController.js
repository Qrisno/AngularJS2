
let UserController = function ($scope, github, $routeParams) {
    $scope.username = $routeParams.username;
    $scope.orderAsc = '-stargazers_count';
    let onErr = (e) => ($scope.error = e.data.message);
    $scope.search = function search(u){
        $scope.username = u;
        github.getUser(u).then(function (response) {
            let person = {
                firstName: response.name,
                imgSrc: response.avatar_url,
                login:response.login
            };
            $scope.person = person;
            github.getRepos(response).then(function(response){
                $scope.repos = response;
            })
        }, onErr);
        $scope.error = null;

    }
    $scope.search($scope.username)

}
myApp.controller('UserController', UserController);


