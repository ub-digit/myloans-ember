import Ember from 'ember';
export default Ember.Object.extend({
  statusString: function() {
    return Ember.I18n.t("checkouts.statuses." + this.get('status'))
  }.property('status')
});