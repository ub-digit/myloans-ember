import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "user",
  
  fines: function() {
    return this.get('controllers.user.model.fines');
  }.property('controllers.user.model.fines'),
  
  user: function() {
    return this.get('controllers.user.model');
  }.property('controllers.user.model')
});