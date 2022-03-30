function loadRom(url, callback) {
	console.log('loadRom', url);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.responseType = 'arraybuffer';

	xhr.onload = function() { callback(xhr.response) };
	xhr.send();
}

function loadData(url, callback){
	console.log('loadData', url);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.responseType = 'json';

	xhr.onload = function() { callback(xhr.response) };
	xhr.send();
}