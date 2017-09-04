(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($rootScope,$location,$firebaseAuth)
    {
        var vm = this;
        $rootScope.slackRedirectDefault = encodeURIComponent("https://x.emelle.me/jsonservice/User/slackv2Auth");
 
        
        vm.emailAuth = emailAuth;
        vm.slackAuth = slackAuth;
        vm.googleAuth = gAuth;

        $rootScope.authObj = $firebaseAuth();

        // Data
        vm.form = {};

        // Methods
        function emailAuth(event){
            console.log(vm.form);
            var credential = firebase.auth.EmailAuthProvider.credential(vm.form.email, vm.form.password);

            $rootScope.authObj.$signInWithCredential(credential).then(function(firebaseUser) {
              console.log("Signed in as:", firebaseUser.uid);
            }).catch(function(error) {
              // console.error("Authentication failed:", error);
            });
            
        }

        function slackAuth(){

        }

        function gAuth(){
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope("https://www.googleapis.com/auth/plus.login");
            provider.setCustomParameters({
              login_hint: "user@example.com"
            });

            $rootScope.authObj.$signInWithRedirect(provider).then(function(result) {
              // Never called because of page redirect
              // Instead, use $onAuthStateChanged() to detect successful authentication
            }).catch(function(error) {
              console.error("Authentication failed:", error);
            });
        }

        //////////
    }
})();