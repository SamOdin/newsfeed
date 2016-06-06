function initStates($stateProvider, $ocLazyLoadProvider) {
    $stateProvider
        .state('index', {
            abstract: true,
            data: {isPublic: true},
            views: {
                'layout': {
                    controller: 'indexCtrl',
                    templateUrl: '/app/modules/index/views/layout.html',
                    resolve: resolveModule ([
                        'indexCtrl', 
                        'articlesProvider', 
                        'catalogProvider', 
                        'searchFilter', 
                        'chatCtrl'])
                }
            }
        })
        
        .state('landing', {
            url: '/',
            parent: 'index',
            views: {
                'landing': {
                    controller: 'landingCtrl',
                    templateUrl: '/app/modules/landing/views/landing.html',
                    resolve: resolveModule (['landingCtrl'])
                }
            }
        })

        .state('article', {
            url: '/article/:id',
            parent: 'index',
            views: {
                'landing': {
                    controller: 'articleCtrl',
                    templateUrl: '/app/modules/article/views/article.html',
                    resolve: resolveModule (['articleCtrl'])
                }
            }
        })

        .state('catalog', {
            url: '/catalog/:id',
            parent: 'index',
            views: {
                'landing': {
                    controller: 'catalogCtrl',
                    templateUrl: '/app/modules/catalog/views/catalog.html',
                    resolve: resolveModule (['catalogCtrl'])
                }
            }
        })
    
    function resolveModule(moduleName) {
        return {
            loadModules: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load(moduleName);
            }]
        }
    }
}