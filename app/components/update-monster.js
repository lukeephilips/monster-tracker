import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateMonsterForm: false,
  actions: {
    toggleUpdateMonsterForm() {
      this.toggleProperty('showUpdateMonsterForm');
    },
    updateMonster(monster) {
      var params = {
        name: this.get('name'),
        blurb: this.get('blurb'),
        description: this.get('description'),
        image: this.get('image'),
        location: this.get('location'),
        danger: this.get('danger'),
        attack: this.get('attack'),
        recommendation: this.get('recommendation'),

      };
      this.toggleProperty('showUpdateMonsterForm');
      debugger;
      this.sendAction('updateMonster', monster, params);
    }
  }
});
