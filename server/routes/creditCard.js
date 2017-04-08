'use strict';

module.exports = function(app) {
    var controller = app.controllers.creditCard;
    app.route('/creditCard')
    .get(controller.findAll)
    .post(controller.save)
    .put(controller.edit);

    app.route('/creditCard/:id')
    .get(controller.getCreditCard)
    .delete(controller.delete);

};
