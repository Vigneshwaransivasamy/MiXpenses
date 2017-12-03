const Bitlink = require('../models').Bitlink;
const moment = require('moment');

exports.createBitlink = function(req, res){
  var body = req.body;
  let link = req.body.link;
  let expiresAt = req.body.expiresAt
  console.log('expiresAt',expiresAt)
  console.log('link',link);
  let currentTime = moment(Date.now());
  let afterTime = moment(currentTime).add(expiresAt ,'m');
  console.log('current', currentTime, 'after', afterTime);
  let _data = {
    link: link,
    expiresAt: afterTime
  }
  // console.log(_data);
  Bitlink.create(_data, function(err, bitlink){
    if(err){
      res.status(400).json({error: err})
    }
    res.json({
     success: true,
     data: bitlink 
    });
  });
}

exports.redirectById = function(req, res){
  var id = req.params.id;
  Bitlink.findOne({_id: id}, function(err, url){
    console.log(url);
    if(err){
      res.status(400).send({err: 'Unknown url'});
    }
    if(url && url.isValid && url.isValid()){
      return res.redirect(url.link);
    } else {
      res.send({err : 'Link got expired'})
    }
  })
}
