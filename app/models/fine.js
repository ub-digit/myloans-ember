import Ember from 'ember';
export default Ember.Object.extend({
  typeString: function() {
    return Ember.I18n.t("fines.types." + this.get('type'))
  }.property('type')
});