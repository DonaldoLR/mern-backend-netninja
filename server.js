require('dotenv').config();

const express = require('express');

// starts the express app
const app = express();

// middleware
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.get('/', (req, res) => {
	res.json({ mssg: 'welcome to the app' });
});

// listen for requests
app.listen(process.env.PORT, () => {
	console.log('listening on port 4000!!!');
});