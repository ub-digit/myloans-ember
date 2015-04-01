import Ember from 'ember';
import ENV from 'myloans-ember/config/environment';
import Contactinfo from 'myloans-ember/models/contactinfo';

export default Ember.Route.extend({

  model: function() {
    var that = this;
    var user = this.modelFor('user');
    var contactinfo = Contactinfo.create({
      street: user.street, 
      postal_code: user.postal_code, 
      city: user.city, 
      phone_nr: user.phone_nr, 
      mobile_nr: user.mobile_nr, 
      email: user.email, 
      communication_preference: user.communication_preference, 
      preferred_language: user.preferred_language,
      name: user.name
    });
    return contactinfo
  },
  setupController: function(controller, model) {
    // To be able to access from specific controllers
    controller.set('model', model);
  }
});
