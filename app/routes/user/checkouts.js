import Ember from 'ember';
export default Ember.Route.extend({
  setupController: function(controller, model) {
    // To be able to access from specific controllers
    controller.set('message', null);
    controller.set('error', null);
  }
});
