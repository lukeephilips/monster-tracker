import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  blurb: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  location: DS.attr(),
  danger: DS.attr(),
  attack: DS.attr(),
  recommendation: DS.attr()
});
