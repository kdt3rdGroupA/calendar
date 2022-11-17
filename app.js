const express = require('express');
const session = require('express-session');
const app = express();
const http = require('http').Server(app);

const PORT = 8000;




// app.listen(PORT, (req, res) => {
//   console.log(`http://localhost:${PORT}`);
// });

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});