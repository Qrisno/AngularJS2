
let RepoController = function ($scope, github, $routeParams) {
    $scope.username = $routeParams.username;
    $scope.repoName = $routeParams.reponame;
    $scope.orderAsc = '-stargazers_count';
    let onRepo = function (data){
        $scope.repo  = data;
    }
    let onErr = (e) => ($scope.error = e.data.message);
    github.getRepoDetails($scope.username, $scope.repoName).then(onRepo,onErr)
}
myApp.controller('RepoController', RepoController);


