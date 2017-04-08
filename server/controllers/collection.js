'use strict';

module.exports = function(app) {

    var controller = {},
        collections = ['Test.json', 'Create_User.json'];

    controller.findAll = function(req, res) {
        collections.forEach(function(item) {
          item.su
        });
        res.json(collections);
    };

    controller.getCollection = function(req, res) {
        var id = req.params.id;
        if (collections.has(id)) {
          res.json(id);
        } else {
          res.status(404).json('Collection not found');
        }
    };

    controller.generateCollection = function(req, res) {
        res.json({message: "successfuly generated"});
    };

    return controller;
};
