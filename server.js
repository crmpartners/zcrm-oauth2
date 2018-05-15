'use strict';

const app = require('express')();
const opn = require('opn');
let instance;

function makeServer(options, onCodeReceived) {
  const port = options.port;

  // open the browser
  opn(`https://accounts.zoho.${options.location}/oauth/v2/auth?scope=${options.scope}&client_id=${options.id}&response_type=code&access_type=offline&redirect_uri=http://localhost:${port}/`);

  app.get('/', (req, res) => {
    const code = req.query.code;
    res.send('You can close the browser now.');

    if (instance) instance.close(() => {
      console.log('Server closed');
    });

    onCodeReceived(code);
  });

  instance = app.listen(port, () => console.log(`Server running on port ${port}...`));
}

module.exports = makeServer;
