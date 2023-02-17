'use strict';

const express = require('express');

// Constants
const PORT = 8888;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

 app.listen(port, () => {
    console.log(`listening to the port ${port}`)
});
