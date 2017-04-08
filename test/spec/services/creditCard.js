'use strict';

describe('Service: CreditCard', function () {

  // load the service's module
  beforeEach(module('mergePostmanCollectionApp'));

  // instantiate service
  var Creditcard;
  beforeEach(inject(function (_Creditcard_) {
    Creditcard = _Creditcard_;
  }));

  it('should do something', function () {
    expect(!!Creditcard).toBe(true);
  });

});
