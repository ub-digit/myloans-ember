import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('login');

  this.resource('user', function() {
    this.route('checkouts');
    this.route('requests');
    this.route('fines');
    this.route('info');
    this.route('editinfo');
  });

});

export default Router;
