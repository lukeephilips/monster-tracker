import Ember from 'ember';

export default Ember.Controller.extend({
  content: [],
  safe: (function() {
    this.get('content').filterProperty('danger', 'low');
  }).property('content.@each.type')
});
