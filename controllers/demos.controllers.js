const DemosModel = require('../models/demos.model');

insertData = (req, res) => {
    console.log(req.body);
    DemosModel.create(req.body, (err, result) => {
        if (err) {
            // console.log("error: ", err);
            res.send(err);
        } else {
            res.send(result)
        }
    })
}

getData = (req, res) => {
    DemosModel.find({}, (err, docs) => {
        res.send({
            status: true,
            data: docs
        })
    })
}

module.exports = {
    insertData: insertData,
    getData: getData
}