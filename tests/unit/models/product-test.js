import { describe, it } from 'mocha';
import { expect } from 'chai';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | product', function () {

  setupModelTest('product', {
    // Specify the other units that are required for this test.
    needs: []
  });

  it('should do exist', function () {
    let model = this.subject();
    // let store = this.store();
    expect(model).to.exist;
  });

});
