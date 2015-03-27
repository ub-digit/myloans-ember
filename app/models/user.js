import Ember from 'ember';
import Checkout from 'myloans-ember/models/checkout';
import Request from 'myloans-ember/models/request';
import Fine from 'myloans-ember/models/fine';

export default Ember.Object.extend({
  init: function() {
    var checkoutsArray = Ember.A([]);
    var delayedCheckoutsArray = Ember.A([]);
    this.get('checkouts').forEach(function(entry) {
      if (entry.status === 'checkedOut') {
        checkoutsArray.pushObject(Checkout.create(entry));
      }else{
        delayedCheckoutsArray.pushObject(Checkout.create(entry));
      }
    });

    this.set('checkouts', Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      content: checkoutsArray,
      sortProperties: ['due_date'],
      sortAscending: true
    })
    );

    this.set('delayedCheckouts', Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      content: delayedCheckoutsArray,
      sortProperties: ['due_date'],
      sortAscending: true
    })
    );

    var requestsArray = Ember.A([]);
    var pickupRequestsArray = Ember.A([]);
    this.get('requests').forEach(function(entry) {
      if (entry.status === 'pickup') {
        pickupRequestsArray.pushObject(Request.create(entry));
      } else {
        requestsArray.pushObject(Request.create(entry));
      }
    });

    this.set('requests', Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      content: requestsArray,
      sortProperties: ['expiration_date'],
      sortAscending: true
    })
    );

    this.set('pickupRequests', Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      content: pickupRequestsArray,
      sortProperties: ['expiration_date'],
      sortAscending: true
    })
    );

    var finesArray = Ember.A([]);
    this.get('fines').forEach(function(entry){
      finesArray.pushObject(Fine.create(entry));
    });

    this.set('fines', Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      content: finesArray,
      sortProperties: ['date'],
      sortAscending: true
    })
    );
},
  communication_preferenceString: function() {
    return Ember.I18n.t("user.communication_preferences." + this.get('communication_preference'))
  }.property('communication_preference'),

  preferred_languageString: function() {
    return Ember.I18n.t("user.languages." + this.get('preferred_language'))
  }.property('preferred_language')
});