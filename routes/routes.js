/**
 * Created by wa2291hx on 4/11/2019.
 */

var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    res.json({'message': 'This is my first server app'})
})

router.get('/lion', function (req, res, next){
    res.json({"message": 'Roar!!!'})

})
module.exports = router