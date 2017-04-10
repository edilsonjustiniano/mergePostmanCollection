'use strict';

module.exports = function(app) {

    const fs = require('fs');
    const uuidV4 = require('uuid/v4');
    const dirname = __dirname + '/../collections/';
    var controller = {},
        collections = ['Test.json', 'Create_User.json'];

    controller.findAll = function(req, res) {
        fs.readdir(dirname, function(err, filenames) {
            if (err) {
                console.log(err);
                return;
            }
            res.json(filenames);
        });
       
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
        var generatedId = uuidV4();
        var newCollection = {
            "name": "TestGeneration",
            "id": generatedId,
            "description": "New merged collection",
            "order": [],
            "folders": [],
            "timestamp": Math.round(new Date().getTime() / 1000),
            "owner": 0,
            "public": false,
            "requests": []
        };

        console.log("FileNames: " + JSON.stringify(req.body));
        var filenames = req.body;
        var firstCharIndex = 65;


        //var collectionData = [];
        //fs.readdir(dirname, function(err, filenames) {
            //console.log("Files: " + filenames);
            //if (err) {
              //  console.log(err);
                //return;
            //}

            filenames.forEach(function(filename) {
                console.log("Filename: " + filename);
                var content = fs.readFileSync(dirname + filename, "utf8");
                var data = JSON.parse(content),
                    newFolders = [];
                    //collectionData.push(data);
                
                /* Check if the the Object contains folders */
                data.folders.forEach(function(folder, index) {
                    //console.log("Folder: " + JSON.stringify(folder));
                        
                    /* Fill the requests array with the order array inside the folders attribute */
                    folder.order.forEach(function(requestId) {
                        //console.log("ID: " + requestId);
                        //var request = undefined;
                        var result = data.requests.find(function(req) {
                            //console.log("inside Find: " + req.id);
                            if (req.id === requestId) {
                                return req;
                            }
                        });
                        /*
                        var result = data.requests.filter(function(req) {
                            request = req;
                            return req.id === requestId;
                        });
                        */
                        if (result !== undefined) {
                            //console.log("aqui: " + result.id);
                            result.collectionId = generatedId;
                            newCollection.requests.push(result);
                        }
                    });
                    var firstChar = String.fromCharCode(firstCharIndex + index);
                    //folder.name = folder.name.replace(new RegExp(/[0-9]/g), "");
                    folder.name = firstChar + '-' + folder.name;
                    folder.owner = 0;
                    folder.collectionId = generatedId;
                    newCollection.folders.push(folder);
                });
                
                data.requests.forEach(function(req) {
                    var result = newCollection.requests.find(function(newReq) {
                            //console.log("inside Find: " + req.id);
                            if (newReq.id === req.id) {
                                return req;
                            }
                        });
                    /*
                    var isRequestFound = newCollection.requests.filter(function(newReq) {
                        return newReq.id === req.id;
                    });
                    */

                    if (result === undefined) {
                        req.collectionId = generatedId;
                        newCollection.requests.push(req);
                    }
                });
            });
            //console.log("Finsihed:  " + JSON.stringify(collectionData));
            res.json(newCollection);
            //res.download(dirname + 'Test.postman_collection.json');
            //res.writeHead(200, {
            //    "Content-Type": "application/json",
            //    "Content-Disposition" : "attachment; filename=" + dirname + 'Test.postman_collection.json'});
            //fs.createReadStream(filePath).pipe(res);
        //});
    };

    return controller;
};
