const router = require('express').Router()
const UserController = require('../controllers/userController')
const MiniwpController = require('../controllers/miniwpcontroller')
const isAunthenticate = require('../middleware/Authentication')
const isAuthorize = require('../middleware/Authorization')
const images = require('../helpers/images')
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })
router.get('/', MiniwpController.readAll)
router.get('/miniwp',isAunthenticate, MiniwpController.read)
router.get('/:id', MiniwpController.readOne)
router.post('/miniwp', isAunthenticate, MiniwpController.create)
router.put('/miniwp/:id', isAunthenticate, isAuthorize, MiniwpController.update)
router.delete('/miniwp/:id', isAunthenticate, isAuthorize, MiniwpController.delete)
router.post('/gSign', UserController.gSsign)
router.post('/signup', UserController.signUp)
router.post('/login', UserController.login)

module.exports = router