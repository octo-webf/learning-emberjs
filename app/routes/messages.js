import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      { content: 'message1' },
      { content: 'message2' },
      { content: 'message3' }
    ];
  },

  setupController(controller, model) {
    controller.set('messages', model);
  }
});
