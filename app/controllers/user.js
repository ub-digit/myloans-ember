import Ember from 'ember';
import ENV from 'myloans-ember/config/environment';

export default Ember.Controller.extend({

  checkouts: function() {
    return this.get('model.checkouts').filter(function(item, index, enumerable){
      return item.status === 'checkedOut';
    });
  }.property('model.checkouts.@each'),

  delayedCheckouts: function() {
    return this.get('model.checkouts').filter(function(item, index, enumerable){
      return item.status !== 'checkedOut';
    });
  }.property('model.checkouts.@each')
});

