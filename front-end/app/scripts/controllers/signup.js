'use strict';

angular.module('fairMuseApp')
  .controller('SignupCtrl', function(signupService, flash, $location) {
    var self = this;
    var location;
    location = $location;

    self.sendForm = function(email, password) {
      self.userInfo = {email: self.email,
                       password: self.password,
                       password_confirmation: self.password_confirmation};

      var promise = signupService.signup(self.userInfo);
      promise.then(success, error);
    };

      var success = function(response){
        localStorage.setItem('auth_token', response.data.auth_token);
        localStorage.setItem('user_id', response.data.user_id);
        localStorage.setItem('is_user', response.data.is_user);
        location.path('/subscribe');
      };

      var error = function(response) {
        flash(response.data.messages);
     };
});
