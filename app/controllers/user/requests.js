import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "user",
  
  requests: function() {
    return this.get('controllers.user.model.requests');
  }.property('controllers.user.model.requests'),

  pickupRequests: function() {
    return this.get('controllers.user.model.pickupRequests');
  }.property('controllers.user.model.pickupRequests')
});