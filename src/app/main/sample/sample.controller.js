(function ()
{
    'use strict';

    angular
        .module('app.sample')
        .controller('SampleController', SampleController);

    /** @ngInject */
    function SampleController(DashboardData, uiGmapGoogleMapApi)
    {
        var vm = this;
		vm.dashboardData = DashboardData;
        // Data
        

        // Widget 2
        vm.widget2 = {
            title: vm.dashboardData.widget2.title
        };

        //////////
    }
})();
