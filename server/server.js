// server.js
const express = require('express');
const app = express();

app.use(express.static('client'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;