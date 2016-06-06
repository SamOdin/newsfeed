(function () {
    
    angular
        .module('articleCtrl', [])
        .controller('articleCtrl', ['$scope', '$filter', '$stateParams', articleCtrl])
    
        function articleCtrl($scope, $filter, $stateParams) {
            
            $scope.articles.$promise.then(function (response) {
                $scope.article = $filter('filter')(response, {id: $stateParams.id})[0];
            })
        }
    
})();