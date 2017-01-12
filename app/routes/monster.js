import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
     this.store.findRecord('monster', params.monster_id)
  },
  actions: {
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
    }
  }
});
