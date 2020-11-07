// Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by
// shifting every letter in the input string by k positions in the alphabet, where k is the key.

// string = "xyz"
// key = 2
// output = "zab"

function caesarCipherEncryptor(string, key) {
	let final  = [];
	key = key % 26;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (let i = 0; i < string.length; i++) {
		let index = alphabet.indexOf(string[i]);
		let newIndex = index + key;
		if (newIndex >= 26) {
			newIndex = newIndex - 26;
		}
		final += alphabet.charAt(newIndex);
	}
	return final;
}
