(function ()
{
    'use strict';

    angular
        .module('app.core')
        .run(runBlock);

    /** @ngInject */
    function runBlock(msUtils, fuseGenerator, fuseConfig)
    {
        /**
         * Generate extra classes based on registered themes so we
         * can use same colors with non-angular-material elements
         */
        fuseGenerator.generate();

        //Initialize firebase

          // Initialize Firebase
	 var config = {
    apiKey: "AIzaSyAUN1x-sQdWxT1TnxiZd19hLYZ4dYTXGXk",
    authDomain: "harvey-insurance-app.firebaseapp.com",
    databaseURL: "https://harvey-insurance-app.firebaseio.com",
    projectId: "harvey-insurance-app",
    storageBucket: "harvey-insurance-app.appspot.com",
    messagingSenderId: "1076357677564"
  };
  firebase.initializeApp(config);

        /**
         * Disable md-ink-ripple effects on mobile
         * if 'disableMdInkRippleOnMobile' config enabled
         */
        if ( fuseConfig.getConfig('disableMdInkRippleOnMobile') && msUtils.isMobile() )
        {
            var bodyEl = angular.element('body');
            bodyEl.attr('md-no-ink', true);
        }

        /**
         * Put isMobile() to the html as a class
         */
        if ( msUtils.isMobile() )
        {
            angular.element('html').addClass('is-mobile');
        }

        /**
         * Put browser information to the html as a class
         */
        var browserInfo = msUtils.detectBrowser();
        if ( browserInfo )
        {
            var htmlClass = browserInfo.browser + ' ' + browserInfo.version + ' ' + browserInfo.os;
            angular.element('html').addClass(htmlClass);
        }
    }
})();
