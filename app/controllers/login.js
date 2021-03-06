import Ember from 'ember';
import ENV from 'myloans-ember/config/environment';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      $("body").addClass("loading");

      var that = this;
      //console.log(this.get('username'));
      var username = this.get('username');
      var password = this.get('password');

      Ember.$.ajax({
        type: 'GET',
        url: ENV.APP.serviceURL + '/users/authenticate/',
        data: {
          username: username,
          password: password
        },
        contentType: 'application/json'
      }).then(function(response) {
        if (response.authenticated === true) {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);
          that.transitionToRoute('user.checkouts');
        } 
      },
      function(error) {
        $("body").removeClass("loading");

        console.log(error);
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
      });
    }
  }
});