import Ember from 'ember';
export default Ember.Object.extend({
  init: function() {
    this.set('collapsed', true);
  },

  renewableBool: function() {
    return this.get('renewable') === 'true';
  }.property('renewable'),

  statusString: function() {
    return Ember.I18n.t("checkouts.statuses." + this.get('status'));
  }.property('status'),

  isCollapsed: function() {
    return this.get('collapsed');
  }.property('collapsed'),

  dueDateRelative: function() {
    return moment(this.get('due_date')).fromNow();
  }.property('due_date')
  
});