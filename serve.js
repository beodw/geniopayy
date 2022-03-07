const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join('/geniopay/build/index.html'));
});

app.use(express.static('geniopay/build/'))
app.use('/', router);
app.listen(process.env.PORT || 80);