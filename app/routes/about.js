import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Promise.resolve({message: 'toto'});
  }

});
