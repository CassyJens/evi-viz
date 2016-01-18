var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000))

/**
 * Serve static files.
 */
app.use(express.static(__dirname));

app.listen(app.get('port'), function () {
  console.log('listening on port', app.get('port'));
});
