(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $rootScope,$firebaseObject,$location,$firebaseAuth,$mdToast)
    {
        // Data
        
        // var slashpos = $location.path().lastIndexOf("/");
        // var propVar = $location.path().substr(slashpos+1);
        // $rootScope.uVarParam = null;
        // $rootScope.uVarParam = getParameterByName('t');
        // $rootScope.authObj = $firebaseAuth();
        // console.log($rootScope.uVarParam);
        // console.log(Number.isInteger(parseInt(propVar)));
        // if($rootScope.uVarParam != null){
        //     $rootScope.authObj.$signInWithCustomToken($rootScope.uVarParam).then(function(firebaseUser) {
        //       console.log("Signed in as:", firebaseUser.uid);
        //     }).catch(function(error) {
        //       console.error("Authentication failed:", error);
        //     });
        // }

        // function getParameterByName(name, url) {
        //     if (!url) url = window.location.href;
        //     name = name.replace(/[\[\]]/g, "\\$&");
        //     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        //         results = regex.exec(url);
        //     if (!results) return null;
        //     if (!results[2]) return '';
        //     return decodeURIComponent(results[2].replace(/\+/g, " "));
        // }
        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event)
        {
            if ( event.targetScope.$id === $scope.$id )
            {
                $rootScope.$broadcast('msSplashScreen::remove');
            }
            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                // User is signed in.
                
                // var ref = firebase.database().ref('agents/'+user.uid)
                // if($rootScope.user.uid == null){
                //     $rootScope.user = $firebaseObject(ref);
                    

                //     $rootScope.user.$loaded().then(function(){
                //         if($rootScope.user.$value == null){
                //             $rootScope.user.uid = user.uid;
                //             $rootScope.user.avatar_24 = "https://dealspace.melle.io/assets/images/avatars/profile.jpg";
                //             $rootScope.user.$save();
                //         }
                //     });
                // }
                $mdToast.show(
                      $mdToast.simple()
                      .content("Welcome back!")
                      .position('top right')
                      .hideDelay(1300)
                    );
                // $rootScope.state.go('app.dashboard');
              } else {
                // No user is signed in.
                // $rootScope.state.go('app.pages_auth_login');
              }
            });
        });
    }
})();