// 208. Implement Trie (Prefix Tree)

// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true

// Solution 1

var Trie = function() {
  this.root = {};
};

Trie.prototype.insert = function(word) {
  let current = this.root;
  for (let letter of word) {
      if (!(letter in current)) {
          current[letter] = {};
      }
      current = current[letter];
  }
  current.isWord = true;
};

Trie.prototype.traverse = function(word) {
  let current = this.root;
  for (let letter of word) {
      current = current[letter];
      if (!current) return null;
  }
  return current;
};

Trie.prototype.search = function(word) {
  let node = this.traverse(word);
  if (node) {
      return node.isWord === true;
  }
  return false;
};

Trie.prototype.startsWith = function(prefix) {
  let word = this.traverse(prefix);
   return word !== null;
};
