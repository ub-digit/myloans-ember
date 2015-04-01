import Ember from 'ember';
//import Contactinfo from 'myloans-ember/models/contactinfo';

export default Ember.Controller.extend({
  needs: "user",
  
  user: function() {
    return this.get('controllers.user.model');
  }.property('controllers.user.model'),

  communicationPrefs: [
    {label: Em.I18n.t('user.communication_preferences.0'), value: 0},
    {label: Em.I18n.t('user.communication_preferences.1'), value: 1},
    {label: Em.I18n.t('user.communication_preferences.2'), value: 2},
    {label: Em.I18n.t('user.communication_preferences.3'), value: 3}
  ],

  actions: {
    cancelEdit: function() {
      this.transitionToRoute('user.info');
    },
    save: function() {
      console.log(this.get('model'));
      if (this.get('model.isValid')) {
        console.log("Modellen is Valid!");
      } else {
        console.log("Modellen is Invalid!");
      }
    }
  }
});