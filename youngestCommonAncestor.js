// AlgoExpert: Youngest Common Ancestor
// Difficulty: medium

// Solution 1

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	let depthOne = getDepth(topAncestor, descendantOne);
	let depthTwo = getDepth(topAncestor, descendantTwo);
	while (depthOne > depthTwo) {
		descendantOne = descendantOne.ancestor;
		depthOne--;
	}
	while (depthOne < depthTwo) {
		descendantTwo = descendantTwo.ancestor;
		depthTwo--;
	}
	while (descendantTwo !== descendantOne) {
		descendantOne = descendantOne.ancestor;
		descendantTwo = descendantTwo.ancestor;
	}
	return descendantOne;
}
function getDepth(ancestor, descendant) {
	let depth = 0;
	while (descendant !== ancestor) {
		depth++;
		descendant = descendant.ancestor;
	}
	return depth;
}
