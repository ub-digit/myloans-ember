import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "user",
  
  user: function() {
    return this.get('controllers.user.model');
  }.property('controllers.user.model')
});