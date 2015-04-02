import Ember from 'ember';
export default Ember.Object.extend({
  init: function() {
    this.set('collapsed', true);
  },
  typeString: function() {
    return Ember.I18n.t("fines.types." + this.get('type'));
  }.property('type'),
  isCollapsed: function() {
    return this.get('collapsed');
  }.property('collapsed')
});