(function () {
    
    angular
        .module('landingCtrl', [])
        .controller('landingCtrl', ['$scope', '$filter', landingCtrl]);
    
        function landingCtrl($scope, $filter) {

            $scope.randomArticles = [];
            $scope.randomArticlesForCatalog = [];

            $scope.articles.$promise.then(function (response) {
                
                for (var i = 0; i < 4; i++) {{
                    var randomNumber = Math.floor(Math.random() * (response.length - 1));
                    $scope.randomArticles.push(response[randomNumber]);
                }}

                $scope.catalog.$promise.then(function (catalog) {
                    angular.forEach(catalog, function (value, index) {
                        var filteredArr = $filter('filter')(response, {type: index}, true);
                        var random = parseInt(Math.random() * filteredArr.length);
                        $scope.randomArticlesForCatalog.push(filteredArr[random]);
                    });
                })

            });

        }
    
})();