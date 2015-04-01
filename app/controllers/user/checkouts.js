import Ember from 'ember';
import ENV from 'myloans-ember/config/environment';

export default Ember.Controller.extend({
  needs: "user",
  
  checkouts: function() {
    return this.get('controllers.user.model.checkouts');
  }.property('controllers.user.model.checkouts'),

  delayedCheckouts: function() {
    return this.get('controllers.user.model.delayedCheckouts');
  }.property('controllers.user.model.delayedCheckouts'),

  actions: {
<<<<<<< HEAD
    toggleCollapsed: function(obj) {
      obj.toggleProperty('collapsed');
    }
  }
=======
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

      var should_renew = confirm(Ember.I18n.t("checkouts.confirm_renew") + ' (' + checkout_object.title + ')');

      if (should_renew) {
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
            console.log(response.checkout);
            if (list_type === "checkouts") {
              that.get('controllers.user.model.checkouts').removeObject(checkout_object);
            }
            else {
              that.get('controllers.user.model.delayedCheckouts').removeObject(checkout_object);
            }
            that.get('controllers.user.model.checkouts').addObject(response.checkout);
            that.set('message', Ember.I18n.t("checkouts.renew_success"));
          } 
        },
        function(error) {
          console.log(error);
          that.set('error', Ember.I18n.t("checkouts.renew_error"));
        });
      }
    }
  }


>>>>>>> master
});