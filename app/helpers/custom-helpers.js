var customHelpers = function() {
  Ember.Handlebars.registerHelper('translateTextxx', function (key) {
    return Em.I18n.t(key);
  });
}();

export default customHelpers;