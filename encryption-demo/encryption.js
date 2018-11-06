function shiftChar(ch, sh) {
	sh = sh % 26;
	var i = ch.charCodeAt() + sh;
	if (i > 122) { // 'z'
		i = i - 26;
	}
	else if (i < 97) { // 'a'
		i = i + 26;
	}
	return String.fromCharCode(i);
}

function caesar(text, shift) {
	text = text.toLowerCase();
	var ciphertext = "";
	for (var i=0; i < text.length; i++) {
		var c = shiftChar(text.charAt(i), shift);
		ciphertext += c;
	}
	console.log(ciphertext);
}

function vigenere(text, shift) {
	text = text.toLowerCase();
	var ciphertext = "";
	for (var i=0; i < text.length; i++) {
		var s = shift.charAt(i % shift.length).charCodeAt() - 96;
		var c = shiftChar(text.charAt(i), s);
		ciphertext += c;
	}
	console.log(ciphertext);
}

function freqCount(text) {
	text = text.toLowerCase();
	var frequencies = {};
	for (var i=0; i < text.length; i++) {
		var c = text.charAt(i);
		if (!frequencies.hasOwnProperty(c)) {
			frequencies[c] = 0;
		}
		frequencies[c]++;
	}
	console.log(frequencies);
	printFreqChart(frequencies);
}

function printFreqChart(freq) {
	Object.keys(freq).forEach(function(key) {
		var row = key + " | ";
		for (var j = 0; j < freq[key]; j++) {
			row += "x";
		}
		console.log(row);
	});
}
