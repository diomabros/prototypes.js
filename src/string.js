if(!('contains' in String.prototype)) {	
		
	//Add JSDoc comment
	String.prototype.contains = function(str, startIndex) {
		return -1 !== String.prototype.indexOf.call(this, str, startIndex);
	};
 
 }
 
if(!('startsWith' in String.prototype)) {
	
	//Add JSDoc comment
	String.prototype.startsWith = function(prefix) {
		return this.indexOf(prefix) === 0;
	};
	
}

if(!('endsWith' in String.prototype)) {
	
	//Add JSDoc comment
	String.prototype.endsWith = function(suffix) {
		if (this.length < suffix.length)
			return false;
		return this.lastIndexOf(suffix) === (this.length - suffix.length);
	};
	
}

if(!('random' in String.prototype)) {
	
	//Add JSDoc comment
	String.prototype.random = function(length) {
		if (!length)
			length = 5;
			
		//Calculate rand string
	};
	
}
