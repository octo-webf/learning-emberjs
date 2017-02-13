import Ember from 'ember';

const MessageList = Ember.Component.extend({
});

MessageList.reopenClass({
  positionalParams: ['messages']
});

export default MessageList;

