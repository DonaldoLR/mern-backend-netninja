require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// starts the express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to DB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log('Connected to DB & listening to port');
		});
	})
	.catch((error) => {
		console.log(error);
	});
