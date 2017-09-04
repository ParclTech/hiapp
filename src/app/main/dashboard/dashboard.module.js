(function ()
{
    'use strict';

    angular
        .module('app.dashboard', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.dashboard', {
                url    : '/dashboard',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/dashboard/dashboard.html',
                        controller : 'DashboardController as vm'
                    }
                },
                resolve: {
                    // UserData: function ($firebaseArray)
                    // {
                    //     return msApi.resolve('sample@get');
                    // }
                    DashboardData: function (msApi)
                    {
                        return msApi.resolve('dashboard.project@get');
                    }
                }
            })
            .state('app.property', {
                url    : '/property',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/dashboard/property.html',
                        controller : 'PropertyController as vm'
                    }
                },
                resolve: {
                    // UserData: function ($firebaseArray)
                    // {
                    //     return msApi.resolve('sample@get');
                    // }
                    PropertyData: function (msApi)
                    {
                        return msApi.resolve('property.project@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/dashboard');

        // Api
        msApiProvider.register('sample', ['app/data/sample/sample.json']);
        msApiProvider.register('dashboard.project', ['app/data/dashboard/project/data.json']);
        // Navigation
        msNavigationServiceProvider.saveItem('wishlist', {
            title : 'Wishlist',
            group : true,
            weight: 1
        });

        // msNavigationServiceProvider.saveItem('fuse.dashboard', {
        //     title    : 'DashboardT',
        //     icon     : 'icon-tile-four',
        //     state    : 'app.dashboard',
        //     /*stateParams: {
        //         'param1': 'page'
        //      },*/
        //     translate: 'SAMPLE.SAMPLE_NAV',
        //     weight   : 1
        // });
    }
})();