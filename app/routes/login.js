import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // Clear session credentials
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('password', '');
  },

  model: function() {
    return {};
  },
  setupController: function(controller, model) {
    // To be able to access from specific controllers
    controller.set('model', model);
  }

});
