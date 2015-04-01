import Ember from 'ember';
import Contactinfo from 'myloans-ember/models/contactinfo';

export default Ember.Controller.extend({
  needs: "user",
  
  user: function() {
    return this.get('controllers.user.model');
  }.property('controllers.user.model'),

  actions: {
    cancelEdit: function() {
      this.transitionToRoute('user.info');
    }
  }
});