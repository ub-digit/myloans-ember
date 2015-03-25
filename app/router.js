import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('login');

  this.resource('loans');

  this.resource('requests');

  this.resource('user');

  this.resource('fines');
});

export default Router;
