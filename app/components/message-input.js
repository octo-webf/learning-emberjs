import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submitMessage() {
      Ember.Logger.info(this.get('content'));
    }
  }

});
