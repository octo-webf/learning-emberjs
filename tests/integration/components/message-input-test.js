import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | message input', function () {
  setupComponentTest('message-input', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#message-input}}
    //     template content
    //   {{/message-input}}
    // `);

    this.render(hbs`{{message-input}}`);
    expect(this.$()).to.have.length(1);
  });

});
