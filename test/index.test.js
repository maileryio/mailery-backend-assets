'use strict';
import { expect } from 'chai';

describe('mailery-assets', () => {
  before(() => {
  });

  after(() => {
  });

  beforeEach(() => {
  });

  afterEach(() => {
  });

  it('should render mailery-assets on mount', () => {
    expect(true).to.be.true;
    expect(false).to.be.false;
    expect(undefined).to.be.undefined;
    expect([1, 2, 3]).to.have.property(1);
    expect(['.js', '.jsx', '.vue']).to.include.members(['.js', '.jsx']);
    expect({ id: 1, name: 'sky' }).to.include.all.keys(['id', 'name']);
  });
});
