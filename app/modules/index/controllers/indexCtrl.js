(function () {

    angular
        .module('indexCtrl', [])
        .controller('indexCtrl', ['$scope', 'articlesProvider', 'catalogProvider', indexCtrl]);
    
            function indexCtrl($scope, articlesProvider, catalogProvider, activeCategory) {

                $scope.articles = articlesProvider.getArticles();
                $scope.catalog = catalogProvider.getCatalog();

            }

})();