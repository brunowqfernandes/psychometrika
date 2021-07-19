const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

require('./app/controllers/index')(app);

app.listen(3080);