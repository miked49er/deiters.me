var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mike Deiters' });
});

router.get('/photographer', function(req, res, next) {
  res.render('index', { title: 'Mike Deiters' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Mike Deiters' });
});

router.get('/developer', function(req, res, next) {
  res.render('index', { title: 'Mike Deiters' });
});

module.exports = router;
