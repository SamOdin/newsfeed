(function () {
    
    angular
        .module('articlesProvider', [])
        .service('articlesProvider', ['$resource', articlesProvider])

        function articlesProvider($resourse) {
            return $resourse('/data/articles.json', {}, {
                'getArticles': {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    
})();