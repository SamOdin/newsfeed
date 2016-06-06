(function () {

    angular
        .module('searchFilter', [])
        .filter('searchFilter', searchFilter)

        function searchFilter() {
            return function (arr, search) {
                if (!search) {
                    return arr;
                }

                var result = [];

                search = search.toLowerCase();
                angular.forEach(arr, function (article) {
                    if (article.title.toLowerCase().indexOf(search) !== -1 || article.text.toLowerCase().indexOf(search) !== -1) {
                        result.push(article);
                    }
                });

                return result;

            }
        }

})();