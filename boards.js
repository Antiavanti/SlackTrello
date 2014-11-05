var trello = [
	'Jw0MCG81/innovativeproject-ciherd',
	'ZzWgZtvO/innovativeproject-resttest',
	'is2oSaFq/innovativeproject-docdb',
	'KigpoKUl/innovativeproject-whereisboss',
	'QOFCsUyp/innovativeproject-lighci',
	'A3a9CnxO/innovativeproject-lostsignal',
	'tKl2ZmdZ/innovativeproject-annonsurvey',
	'Hozg7cAV/innovativeproject-wakerapp',
	'GDpKBBIc/innovativeproject-mempress'
];

var boards = trello.map(function(element) {
	var parts = element.split('/');
	return {
		id: parts[0],
		channel: parts[1].replace('innovativeproject-', '')
	};
});

module.exports = boards;