import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('monster');
  },
  isWide: false,
  actions: {
    saveMonster(params){
      var newMonster = this.store.createRecord('monster', params);
        newMonster.save();
        this.transitionTo('index');
    },
    updateMonster(monster, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          monster.set(key,params[key]);
        }
      });
      monster.save();
      this.transitionTo('index');
    },
    destroyMonster(monster) {
      monster.destroyRecord();
      this.transitionTo('index');
    },
    toggleImageSize() {
      debugger;
      this.toggleProperty('isWide');
    }
  }

});
