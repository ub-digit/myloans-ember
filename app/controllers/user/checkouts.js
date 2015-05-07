import Ember from 'ember';
import ENV from 'myloans-ember/config/environment';

export default Ember.Controller.extend({
  needs: "user",
  
  checkouts: function() {
    return this.get('controllers.user.model.notDelayedCheckouts');
  }.property('controllers.user.model.checkouts.@each'),

  delayedCheckouts: function() {
    return this.get('controllers.user.model.delayedCheckouts');
  }.property('controllers.user.model.checkouts.@each'),

  actions: {
    toggleCollapsed: function(obj) {
      obj.toggleProperty('collapsed');
    },
    renew: function(checkoutId) {
      var that = this;
      var username = sessionStorage.getItem('username');
      var password = sessionStorage.getItem('password');
      var checkout_object = that.get('checkouts').findBy('checkout_id', checkoutId);
      var list_type = "checkouts";
      if (!checkout_object) {
        list_type = "delayedCheckouts";
        checkout_object = that.get('delayedCheckouts').findBy('checkout_id', checkoutId);
         if (!checkout_object) {
           console.log('request with id ' + checkoutId + ' does not exist');
           return;
        }  
      }


      Ember.$.ajax({
        type: 'PUT',
        url: ENV.APP.serviceURL + '/users/renew',
        data: JSON.stringify({
          username: username,
          password: password,
          checkout_id	: checkoutId
        }),
        contentType: 'application/json',
        dataType: 'json'
      }).then(function(response) {
        if (response.success === true) {
          checkout_object.set('due_date', response.checkout.due_date);
          checkout_object.set('status', response.checkout.status);
          checkout_object.set('renewable', response.checkout.renewable);
          checkout_object.set('recallable_date', response.checkout.recallable_date);

          that.set('message', Ember.I18n.t("checkouts.renew_success"));
        } 
      },
      function(error) {
        console.log(error);
        that.set('error', Ember.I18n.t("checkouts.renew_error"));
      });
    }
  }

});