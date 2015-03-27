import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "user",
  
  checkouts: function() {
    return this.get('controllers.user.model.checkouts');
  }.property('controllers.user.model.checkouts'),

  delayedCheckouts: function() {
    return this.get('controllers.user.model.delayedCheckouts');
  }.property('controllers.user.model.delayedCheckouts')
});