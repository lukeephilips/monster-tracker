import Ember from 'ember';

export default Ember.Component.extend({
  addNewMonster: false,
  actions: {
    toggleMonsterForm() {
      this.toggleProperty('addNewMonster');
    },
    saveMonster(){
      var params = {
        name: this.get('name') ? this.get('name'): "",
        blurb: this.get('blurb') ? this.get('blurb'): "",
        description: this.get('description') ? this.get('description'): "",
        image: this.get('image') ? this.get('image'): "",
        location: this.get('location') ? this.get('location'): "",
        danger: this.get('danger') ? this.get('danger'): "",
        attack: this.get('attack') ? this.get('attack'): "",
        recommendation: this.get('recommendation') ? this.get('recommendation'): "",
      };
      this.toggleProperty('addNewMonster');
      this.sendAction('saveMonster', params)
    }
  }
});
