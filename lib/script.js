
let MainCtrl = function ($scope, $interval, $location) {
  $scope.count = 5;
  $scope.username = 'angular'
  let countDownInterval = null;
  startCountDown();
  function decrement(){
    $scope.count--;
    if($scope.count < 1) $scope.search($scope.username);
  }
  function startCountDown(){
    countDownInterval = $interval(decrement,1000, $scope.count);
  }
  $scope.search = function search(u){
    if(countDownInterval){
      $interval.cancel(countDownInterval)
      $scope.count = 0;
    }
    $scope.username = u;
    $location.path('/user/'+$scope.username);

    };
}
myApp.controller('MainCtrl', MainCtrl);


