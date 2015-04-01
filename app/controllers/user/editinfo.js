import Ember from 'ember';
import ENV from 'myloans-ember/config/environment';

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
      var that = this;
      var username = sessionStorage.getItem('username');
      var password = sessionStorage.getItem('password');
      console.log(this.get('model'));
      console.log(this.get('model.inValid'))
      if (this.get('model.inValid')) {
        console.log("Modellen is Invalid!");

      } else {
       Ember.$.ajax({
        type: 'PUT',
        url: ENV.APP.serviceURL + '/users/update',
        data: JSON.stringify({
          username: username,
          password: password,
          city: this.get('city'),
          street: this.get('street'),
          postal_code: this.get('postal_code'),
          phone_nr: this.get('phone_nr'),
          mobile_nr: this.get('mobile_nr'),
          email: this.get('email'),
          communication_preference: this.get('communication_preference_id'),
          preferred_language: this.get('preferred_language')
        }),
        contentType: 'application/json',
        dataType: 'json'
      }).then(function(response) {
        console.log(response);
      },
      function(response) {
        console.log(response);
      }
      )
    }
  }
}
});