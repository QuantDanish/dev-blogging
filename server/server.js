const express = require('express');
const path = require('path');

const rootDir = path.resolve(__dirname, '../dist');

const app = express();

app.use(express.static(rootDir));

app.use('*', (req, res) => {
  return res.sendFile(path.resolve(rootDir, 'index.html'));
});

app.listen(process.env.PORT || 3000);
