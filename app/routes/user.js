import Ember from 'ember';
import ENV from 'myloans-ember/config/environment';
import User from 'myloans-ember/models/user';

export default Ember.Route.extend({
  beforeModel: function() {
    // If credentials are missing, login
    if (!sessionStorage.getItem('username') || !sessionStorage.getItem('password')) {
      this.transitionTo('login');
    }
  },

  model: function() {
    var that = this;
    var username = sessionStorage.getItem('username');
    var password = sessionStorage.getItem('password');

    return Ember.$.ajax({
      type: 'GET',
      url: ENV.APP.serviceURL + '/users/show',
      data: {
        username: username,
        password: password
      },
      contentType: 'application/json'
    }).then(function(response) {    
      $("body").removeClass("loading");
      return User.create(response.user);
    },
    function(error) {
      console.log(error);
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('password');
      that.transitionTo('login');
    });
  },
  setupController: function(controller, model) {
    // To be able to access from specific controllers
    controller.set('model', model);

    Ember.run.later(this, function() {
      this.refresh();
    } , 60000);
  }
});
