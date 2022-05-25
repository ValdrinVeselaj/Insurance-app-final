const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
dotenv.config({ path: './config/config.env' });
const cors = require("cors")


const app = express();
connectDB();

app.use(cors())
app.use(express.json());
app.use(express.static('./public')); // Public folder
app.use('/api/auth', require('./routes/auth'));
app.use('/api/items', require('./routes/tpl'));
app.use('/api/items', require('./routes/greenCard'));
app.use('/api/items', require('./routes/kasko'));
app.use('/api/items', require('./routes/siguroUdhetimin'));
app.use('/api/items', require('./routes/siguroShendetin1'));
app.use('/api/items', require('./routes/siguroShendetin2'));
app.use('/api/items', require('./routes/siguroShendetin3'));
app.use('/api/items', require('./routes/siguroShtepin1'));
app.use('/api/items', require('./routes/siguroShtepin2'));
app.use('/api/items', require('./routes/siguroShtepin3'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const port = process.env.PORT || 5200;
app.listen(port, () => console.log(`Server running in port ${port}`));


// To put this for build after push to heroku
// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build -- prefix client"
// Or without it just build reactapp before push