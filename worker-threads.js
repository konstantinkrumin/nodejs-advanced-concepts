// I'm a child, I'm going to act like a server and do nothing else
const express = require('express');
const crypto = require('crypto');
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
	const worker = new Worker(function () {
		this.onmessage = function () {
			let counter = 0;

			while (counter < 1e9) {
				counter++;
			}

			postMessage(counter);
		};
	});

	worker.onmessage = function (message) {
		console.log(message.data);
		res.send('' + message.data);
	};

	worker.postMessage = function () {};
});

app.get('/fast', (req, res) => {
	res.send('This was fast!');
});

app.listen(3000);
