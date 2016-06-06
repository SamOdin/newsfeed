(function () {

    angular
        .module('catalogCtrl', ['infinite-scroll'])
        .controller('catalogCtrl', ['$scope', '$filter', '$stateParams', catalogCtrl])

        function catalogCtrl($scope, $filter, $stateParams) {

            $scope.articles.$promise.then(function (response) {
                $scope.catalogDir = $filter('filter')(response, {type: $stateParams.id});
            })

            $scope.limit = 6;

            $scope.learnMore = function () {
                $scope.limit += 2;
            };
            
        }

})();