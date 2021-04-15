myApp.factory('github', function($http){
  function getUser(username){
    return $http.get(`https://api.github.com/users/${username}`).then(
      function(response){
        return response.data;
      }
    )
  }
  function getRepoDetails(username, repoName){
        let repo ;
        let repoUrl = `https://api.github.com/repos/${username}/${repoName}`;
        return $http.get(repoUrl).then(
            function(response){
                repo = response.data;
                return $http.get(repoUrl+'/collaborators')
            })
            .then(function (response){
                repo.collaborators = response.data;
                return repo;
            })

    }
  function getRepos(data){
    return  $http.get(data.repos_url).then(
      function(response){
        return response.data;
      } 
    )
  }

  return {
    getUser: getUser,
    getRepos: getRepos,
      getRepoDetails:getRepoDetails
  }
})