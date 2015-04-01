import Ember from 'ember';
export default Ember.Object.extend({
  init: function() {
    this.set('collapsed', true);
    this.set('renewableBool', this.get('renewable') == 'true');
  },
  statusString: function() {
    return Ember.I18n.t("checkouts.statuses." + this.get('status'))
  }.property('status'),
  isCollapsed: function() {
    return this.get('collapsed');
  }.property('collapsed')
});