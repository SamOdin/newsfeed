(function () {

    angular
        .module('main', ['ui.router', 'oc.lazyLoad', 'ngResource', 'uiRouterStyles', 'infinite-scroll'])
        .config(mainConfig)

            mainConfig.$inject = [
                '$interpolateProvider',
                '$ocLazyLoadProvider',
                '$stateProvider',
                '$urlRouterProvider',
                '$locationProvider',
                '$httpProvider'
            ];
    
            function mainConfig($interpolateProvider, $ocLazyLoadProvider,
                                $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

                $locationProvider.html5Mode(true).hashPrefix('!');
                $interpolateProvider.startSymbol('[[').endSymbol(']]');
                initModules($ocLazyLoadProvider);
                initStates($stateProvider, $ocLazyLoadProvider);
                $httpProvider.defaults.withCredentials = true;
                $urlRouterProvider.otherwise('/');
            }

})();