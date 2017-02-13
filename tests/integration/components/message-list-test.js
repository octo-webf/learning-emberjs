import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | message list', function () {
  setupComponentTest('message-list', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#message-list}}
    //     template content
    //   {{/message-list}}
    // `);

    this.render(hbs`{{message-list}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should display 1 message if list in param contains 1 element', function () {
    this.set('messages', [
      { content: 'single message' }
    ]);
    this.render(hbs`{{message-list messages}}`);
    expect(this.$('.message-item')).to.have.length(1);
  });

  it('should display 3 messages if list in param contains 3 element', function () {
    this.set('messages', [
      { content: 'message #1' },
      { content: 'message #2' },
      { content: 'message #3' }
    ]);
    this.render(hbs`{{message-list messages}}`);
    expect(this.$('.message-item')).to.have.length(3);
  });

});
