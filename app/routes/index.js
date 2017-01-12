import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('monster')
  },
  isWide: false,
  actions: {
    saveMonster(params){
      var newMonster = this.store.createRecord('monster', params);
        newMonster.save();
        this.transitionTo('index');
    },
    toggleImageSize() {
      debugger;
      this.toggleProperty('isWide');
    }
  }

});
