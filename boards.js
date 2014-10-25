var trello = [
	'Jw0MCG81/innovativeproject-ciherd',
	'ZzWgZtvO/innovativeproject-resttest',
];

var boards = trello.map(function(element) {
	var parts = element.split('/');
	return {
		id: parts[0],
		channel: parts[1].replace('innovativeproject-', '')
	};
});

module.exports = boards;