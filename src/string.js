var inString = function(prop) {

	if (searchInPrototype)
		return searchInPrototype(prop, String.prototype);

};

if(!inString('contains')) {	
		
	//Add JSDoc comment
	String.prototype.contains = function(str, startIndex) {
		return -1 !== String.prototype.indexOf.call(this, str, startIndex);
	};
 
 }
 
if(!inString('startsWith')) {
	
	//Add JSDoc comment
	String.prototype.startsWith = function(prefix) {
		return this.indexOf(prefix) === 0;
	};
	
}

if(!inString('endsWith')) {
	
	//Add JSDoc comment
	String.prototype.endsWith = function(suffix) {
		if (this.length < suffix.length)
			return false;
		return this.lastIndexOf(suffix) === (this.length - suffix.length);
	};
	
}

if(!inString('random')) {
	
	//Add JSDoc comment
	String.prototype.random = function(length) {
		if (!length)
			length = 5;
			
		//Calculate rand string
	};
	
}
