let Miniwp = require('../models/miniwp')
function auth(req, res, next) {
    let id = req.params.id
    Miniwp.findOne({
            _id : id
    })
    .then(function (data) { 
        if(req.payload.id == data.user_Id){
            next()
        }else {
            res.status(401).json({
                msg: 'data not match'
            })
        }
        
    })
    .catch(function (err) {
        res.status(404).json(err)
        
    })

    
}

module.exports = auth