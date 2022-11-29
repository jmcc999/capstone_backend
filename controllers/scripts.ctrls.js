const db = require('../models')

// get scripts
const index = (req, res) => {
    db.Script.find({}, (err, scripts) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json({
            scripts,
            requestedAt: new Date().toLocaleDateString()
        })
    })
}
// create a Script with req.body
const create = (req, res) => {
    db.Script.create(req.body, (err, createdScript) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json(createdScript) 
//  .json() will send proper headers in response so client knows it's json coming back
    })
}

//destroy a single Script by its ID
const destroy = (req, res) => {
    db.Script.findByIdAndDelete(req.params.id, (error, deletedScript) => {
        //if no Script is found, send json err msg to frontend
        if(!deletedScript) return res.status(400).json({error: "Script not found"})
        // display error
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({
            message: `Script ${deletedScript.name} deleted successfully! `
        })
    })
}

//updating a single Script
const update = (req, res) => {
    db.Script.findByIdAndUpdate(req.params.id, 
        {
            $set: req.body
        }, 
        {new: true}, 
        (err, updatedScript) => {
            if(err) return res.status(400).json({error: err.message})
            return res.status(200).json(updatedScript)
        }
    )
}

module.exports = {
    index,
    create,
    destroy,
    update
}

// module.export = index

