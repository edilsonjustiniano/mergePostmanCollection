'use strict';

module.exports = function(app) {
    var controller = app.controllers.collection;
    app.route('/collections')
    .get(controller.findAll)
    .post(controller.generateCollection);

    app.route('/collections/:id')
    .get(controller.getCollection);
};
