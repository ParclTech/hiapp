(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(fuseTheming,$mdToast,$rootScope)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;

        //////////
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log(user);
            $rootScope.user = user.providerData[0];
            // User is signed in.
            // if(user.uid != null){
            //     var ref = firebase.database().ref('agents/'+user.uid)
            
            //     $rootScope.user = $firebaseObject(ref);
                
            //     $rootScope.user.$loaded().then(function(){
            //         if($rootScope.user.uid === undefined){
            //             $rootScope.user.uid = user.uid;
            //             $rootScope.user.avatar_24 = "https://dealspace.melle.io/assets/images/avatars/profile.jpg";
            //             $rootScope.user.$save();
            //         }else if($rootScope.user.slack !== undefined){
            //             $rootScope.user.avatar_24 = $rootScope.user.slack.user.image_24;
            //             $rootScope.user.FirstName = $rootScope.user.slack.user.name.split(" ")[0];
            //         }

            //         //count stats
            //         if($rootScope.user.stats !== undefined){
            //             var a = moment($rootScope.user.stats.timestamp);
            //             var b = moment();
            //             console.log(a.diff(b,'days'))
            //         }else{
            //             //calculate
            //             // var statsref = firebase.database().ref("philadelphia");
            //             // statsref.orderByChild("assigned_to").equalTo("2").on("value", function(snapshot) {
            //             //     // console.log(snapshot);
            //             // });
            //         }
            //     });
            // }
            $mdToast.show(
                  $mdToast.simple()
                  .content("Welcome back Agent")
                  .position('top right')
                  .hideDelay(1300)
                );
            $rootScope.state.go('app.dashboard');
          } else {
            // No user is signed in.
            console.log('donee')
            // $rootScope.state.go('app.pages_auth_login');
          }
        });
    }
})();