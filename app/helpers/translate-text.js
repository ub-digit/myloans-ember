import Ember from "ember";
export default Ember.Handlebars.makeBoundHelper(function(key) {
  console.log("DEBUG", key, Ember.I18n.t(key));
  return Ember.I18n.t(key);
});