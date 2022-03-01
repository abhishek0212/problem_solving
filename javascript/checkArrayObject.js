/* What's wrong with this code? Fix it to get the desired output. */

const thingIsAnObject = (thing) => {
	if ( ! Array.isArray(thing) && typeof thing === 'object') {
		return true;
	}
		return false;
};

// true
console.log(thingIsAnObject({ 1: 'a', 2: 'b'}));

// false
console.log(thingIsAnObject([1, 2, 3]));

// false
console.log(thingIsAnObject('hi'));

// false
console.log(thingIsAnObject(1));

// false
console.log(thingIsAnObject(false));