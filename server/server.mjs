const express = require('express');
const dotenv = require('dotenv');
const authMiddleware = require('./middlewares/auth').authMiddleware;
const productRoutes = require('./routes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(authMiddleware);
app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;