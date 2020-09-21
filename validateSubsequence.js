function isValidSubsequence(array, sequence) {
	if (sequence.length > array.length) return false;
	let counter = 0;
	for (let i=0;i<array.length; i++) {
    if (counter === array.length) break;
		if (array[i] === sequence[counter]) counter++;
	}
	return counter === sequence.length;
}
