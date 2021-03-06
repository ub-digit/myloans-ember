import Ember from 'ember';
import ENV from 'myloans-ember/config/environment';

export default Ember.Controller.extend({
  needs: "user",
  
  requests: function() {
    return this.get('controllers.user.model.requests');
  }.property('controllers.user.model.requests'),

  pickupRequests: function() {
    return this.get('controllers.user.model.pickupRequests');
  }.property('controllers.user.model.pickupRequests'),

  actions: {
    cancelRequest: function(requestId) {
      var that = this;
      var username = sessionStorage.getItem('username');
      var password = sessionStorage.getItem('password');

      var request_object = this.get('requests').findBy('id', requestId);
      if (!request_object) {
        console.log('request with id ' + requestId + ' does not exist');
        return;
      }

      var should_delete = confirm(Ember.I18n.t("requests.confirm_delete") + ' (' + request_object.title + ')');

      if (should_delete) {

        Ember.$.ajax({
          type: 'DELETE',
          url: ENV.APP.serviceURL + '/users/cancel_request',
          data: JSON.stringify({
            username: username,
            password: password,
            request_id: requestId
          }),
          contentType: 'application/json',
          dataType: 'json'
        }).then(function(response) {
          if (response.success === true) {
            that.get('controllers.user.model.requests').removeObject(request_object);
          } 
        },
        function(error) {
          console.log(error);
        });
      }
    },

    toggleCollapsed: function(obj) {
      obj.toggleProperty('collapsed');
    }
  }
});