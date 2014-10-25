var Bot = require('node-trello-slack');
var config = require('./config');
var boards = require('./boards');

config.start = true;
config.pollFrequency = config.interval * 1000;
config.trello.boards = boards;
delete config.interval;

var bot = new Bot(config);