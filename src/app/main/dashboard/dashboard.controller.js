(function ()
{
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($scope, $interval, $mdSidenav,DashboardData,$firebaseArray,$firebaseObject)
    {
        var vm = this;
        // Data
        vm.dashboardData = DashboardData;
        vm.projects = vm.dashboardData.projects;

        var vp = firebase.database().ref().child('stats').child('vacant');
        var vac = $firebaseObject(vp).$loaded().then(function(snap){
            vm.vacantTotal = snap;
        })

        var vl = firebase.database().ref().child('stats').child('vacant-land');
        var vaclan = $firebaseObject(vl).$loaded().then(function(snap){
            vm.vacantLandTotal = snap;
        })

        var tt = firebase.database().ref().child('stats').child('tax_delinquent');
        var tx = $firebaseObject(tt).$loaded().then(function(snap){
            vm.taxes = snap;
        })

        var dd = firebase.database().ref().child('stats').child('vacant_last_traded');
        var vlt = $firebaseObject(dd).$loaded().then(function(snap){
            vm.vacantLastTraded = snap;
        })
        // Widget 2
		vm.propertyMap = {
            title: 'Property Search Map'
        };
		
		vm.widget3 = {
            title: 'Top 5 Search Results',
			pages: [{
					address: '1551 Stoney Lane',
					type: 'Residential'
				},
				{
					address: '123 Anguilar Drive',
					type: 'Commercial'
				},
				{
					address: '456 N 3rd Street',
					type: 'Residential'
				},
				{
					address: '123 Coder Lane',
					type: 'Residential'
				},
				{
					address: '96 Brown Street',
					type: 'Commercial'
				}]
        };
		
		vm.widget4 = {
            title: 'Top 5 Search Results',
			tabs: [{
				title: 'Last Week',
				results: [{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				}] 
			},
			{
				title: 'Last 30 Days',
				results: [{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '456 Yellow Ave',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '789 Red Lane',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Avenue',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '456 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '789 Brown Lane',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				}]
			},
			{
				title: 'Last 60 Days',
				results: [{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				}]
			},
			{
				title: 'Last 90 Days',
				results: [{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				}]
			},
			{
				title: 'View All Search Results',
				results: [{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				},
				{
					address: '123 Brown Street',
					type: 'Residential',
					date: '1/1/17',
					meta: {}
				}]
			}]
        };

        vm.map = {};
        

    }
})();