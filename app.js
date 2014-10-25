var Bot = require('node-trello-slack');
var config = require('./config');
var boards = require('./boards');

config.start = true;
config.pollFrequency = config.interval * 1000;
config.trello.boards = config.multiroom ? boards : boards.map(function(element) {
	return element.id;
});
delete config.interval;
delete config.multiroom;

var bot = new Bot(config);