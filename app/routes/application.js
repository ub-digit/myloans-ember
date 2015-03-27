import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('user.checkouts');
  },
  model: function() {

  },
  setupController: function(controller, model) {
    // To be able to access from specific controllers
    controller.set('model', model);
  }
});
