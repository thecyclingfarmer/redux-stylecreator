var express = require('express');
var app = express();

app.use('/', express.static('./build'));
app.use('*', express.static('./src/app/framework/index.html'));

app.listen(3000, () => {
  console.log("App running on port 3000");
});
