var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mike Deiters | Developer and Photographer' });
});

router.get('/bakuro', function(req, res, next) {

  fs.readFile('./lib/json/bakuro.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

router.get('/projects', function(req, res, next) {

  fs.readFile('./lib/json/projects.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

router.get('/photographer', function(req, res, next) {
  res.render('index', { title: 'Mike Deiters | Exposure Photographer' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Mike Deiters | Developer and Photographer' });
});

router.get('/developer', function(req, res, next) {
  res.render('index', { title: 'Mike Deiters | Software Developer' });
});

module.exports = router;
