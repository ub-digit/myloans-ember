import Ember from 'ember';
import Em from 'ember';
export default Ember.Object.extend({
  communication_preference_id: function() {
    return +this.get('communication_preference');
  }.property('communication_preference'),

  isValidStreet: function() {
    return !!this.get('street');
  }.property('street'),

  isValidPostalCode: function() {
    return !!this.get('postal_code');
  }.property('postal_code'),

  isValidCity: function() {
    return !!this.get('city');
  }.property('city'),

  isValidMobileNr: function() {
    var re = /^\d+$/;
    if (this.get('communication_preference_id') === 2 || this.get('communication_preference_id') === 3 || this.get('mobile_nr')) {
      if (re.test(this.get('mobile_nr'))) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }.property('mobile_nr', 'communication_preference_id'),

  isValidEmail: function() {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (this.get('communication_preference_id') === 1 || this.get('communication_preference_id') === 3 || this.get('email')) {
      if (re.test(this.get('email'))) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }.property('email', 'communication_preference_id'),

  communicationValidationMessage: function() {
    if(this.get('communication_preference_id') === 0) {
      return null;
    }
    if(this.get('communication_preference_id') === 1 && !this.get('isValidEmail')) {
      return Em.I18n.t('user.errors.email');
    }
    if(this.get('communication_preference_id') === 2 && !this.get('isValidMobileNr')) {
      return Em.I18n.t('user.errors.mobile');
    }
    if(this.get('communication_preference_id') === 3 && (!this.get('isValidEmail') || !this.get('isValidMobileNr'))) {
      if (!this.get('isValidEmail') && this.get('isValidMobileNr')) {
        return Em.I18n.t('user.errors.email');
      }
      if (this.get('isValidEmail') && !this.get('isValidMobileNr')) {
        return Em.I18n.t('user.errors.mobile');
      }
      return Em.I18n.t('user.errors.email_and_mobile');
    }
    return null;
  }.property('isValidEmail', 'isValidMobileNr', 'communication_preference_id'),
  
  inValid: function() {
    return !(this.get('isValidCity') && this.get('isValidStreet') && this.get('isValidPostalCode') && this.get('isValidMobileNr') && this.get('isValidEmail'));

  }.property('street', 'postal_code', 'city', 'mobile_nr', 'communication_preference_id', 'email', 'preferred_language')
});