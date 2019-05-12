const Miniwp = require('../models/miniwp')

class MiniwpController {
    static create(req, res){
        const {author,title,content,image} = req.body
        Miniwp.create({
            title,
            content,
            image,
            author,
            createdAt : new Date().toDateString(),
            user_Id : req.payload.id
    
        })
        .then(function (data) {
            res.status(201).json(data)
            
        })
        .catch(function (err) {
            res.status(401).json(err)
            
        })

    }

    static readAll(req, res){
        Miniwp.find(null,null, {sort:{_id:-1}})
        .populate('userId')
        .then(data =>{
            res.status(200).json(data)

        })
        .catch(err =>{
            res.status(400).json(err)
        })
    }

    static read(req,res){
        Miniwp.find({
            user_Id: req.payload.id

        }, null, {sort: {_id:-1}})
        .populate('userId')
        .then(function (data) {
            if(data.length === 0){
                res.status(404).json({
                    msg: 'data not found'
                })
            }else {
                res.status(200).json(data)
            }
        })
        .catch(function (err) {
            res.status(401).json(err)
            
        })
    }

    static readOne(req, res){
        let dataId = req.params.id
        Miniwp.findOne({
            _id: dataId
        })
        .then(function (data) {
            if(!data){
                res.status(401).json({
                    msg: 'data not found'
                })
            }else {
                res.status(200).json(data)
            }
            
        })
        .catch(function (err) {
            res.status(401).json(err)
            
        })
    }

    static update(req, res){
        let MiniwpId = req.params.id
        const { createdAt,title,content,image,author} = req.body
        // let obj = {createdAt, title, content}
        // if(image) obj.image
        Miniwp.findOneAndUpdate({_id: MiniwpId},
        {
            title,
            content,
            image,
            author,
            createdAt
        }
        )
        .then(function (data) {
            res.status(201).json(data)
        })
        .catch(function (err) {
            res.status(401).json(err)
            
        })

    }

    static delete(req, res){
        let miniwpId = req.params.id
        Miniwp.deleteOne({
            _id: miniwpId
        })
        .then(function (data) {

            res.status(201).json(data)
            
        })
        .catch(function (err) {
            res.status(401).json(err)
        })

    }
}

module.exports = MiniwpController