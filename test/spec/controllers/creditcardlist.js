'use strict';

describe('Controller: CreditcardListCtrl', function () {

    var CreditcardListCtrl,
    CreditCardModel,
    scope,
    state,
    mdToast;

    // load the controller's module
    beforeEach(module('mergePostmanCollectionApp'));



    beforeEach(function () {
        CreditCardModel = {
            query: jasmine.any(Function)
        };

        module(function ($provide) {
            $provide.value('CreditCardModel', CreditCardModel);
        });
    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $state, $mdToast) {
        scope = $rootScope.$new();
        state = $state;
        mdToast = $mdToast;
        CreditcardListCtrl = $controller('CreditcardListCtrl', {
            $scope: scope
        });
    }));

    describe('Controller Initialization', function() {
        it('should initialize the variables and call listCreditCards', function() {
            // given
            scope.buttons = [{
                state: 'creditCardsList.add',
                class: 'md-fab md-primary md-hue-3',
                label: 'Add Card',
                icon: 'images/icons/add.svg'
            }];

            // and
            scope.query = {
                order: 'bank',
                limit: 5,
                page: 1
            };

            // and
            spyOn(scope, 'listCreditCards');

            // when

            // then
            expect(scope.listCreditCards).toHaveBeenCalled();
        });
    });
});
