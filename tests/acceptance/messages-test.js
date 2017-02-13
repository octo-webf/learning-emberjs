import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | messages', function () {

  let application;

  beforeEach(function () {
    application = startApp();
    visit('/messages');
  });

  afterEach(function () {
    destroyApp(application);
  });

  it('can visit /', function () {
    expect(currentURL()).to.equal('/messages');
    expect(findWithAssert('.message-list'));
  });

/*
  it('should display 1 message if list contains 1 element', function () {
    expect(currentURL()).to.equal('/messages');
    expect(findWithAssert('.message-item')).to.have.lengthOf(1);
  });
*/

  it('should display 3 messages if list contains 3 element', function () {
    expect(currentURL()).to.equal('/messages');
    expect(findWithAssert('.message-item')).to.have.lengthOf(3);
  });
});
