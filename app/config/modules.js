function initModules($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [

        /*Controllers*/

        {
            name: 'indexCtrl',
            files: ['/app/modules/index/controllers/indexCtrl.js']
        },
        {
            name: 'landingCtrl',
            files: ['/app/modules/landing/controllers/landingCtrl.js']
        },
        {
            name: 'articleCtrl',
            files: ['/app/modules/article/controllers/articleCtrl.js']
        },
        {
            name: 'catalogCtrl',
            files: ['/app/modules/catalog/controllers/catalogCtrl.js']
        },
        {
            name: 'chatCtrl',
            files: ['/app/modules/index/controllers/chatCtrl.js']
        },    
        
        /*Providers*/
        
        {
            name: 'articlesProvider',
            files: ['/app/modules/index/services/articlesProvider.js']
        },
        {
            name: 'catalogProvider',
            files: ['/app/modules/index/services/catalogProvider.js']
        },

        /*Filters*/
            
        {
            name: 'searchFilter',
            files: ['/app/modules/index/filters/searchFilter.js']
        }
            
    ]
    });
}