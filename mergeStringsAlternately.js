// Merge the strings selang seli

const mergeAlternately = function (word1, word2) {
	let p1 = 0;
	let p2 = 0;
	let merged = "";

	while (p1 < word1.length || p2 < word2.length) {
		if (word1[p1] !== undefined) {
			merged += word1[p1];
		}
		if (word2[p2] !== undefined) {
			merged += word2[p2];
		}

		p1++;
		p2++;
	}

	return merged;
};

console.log(mergeAlternately("abc", "pqrs"));
