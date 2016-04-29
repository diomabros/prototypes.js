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

if(!inString('capitalizeFirstLetter')) {
	
	//Add JSDoc comment
	String.prototype.capitalizeFirstLetter = function () {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}
	
}

if(!inString('rtrim')) {
	
	//Add JSDoc comment
	String.prototype.rtrim = function(toCut){
	    if (!toCut)
	        toCut = " ";
	    
	    if (typeof toCut !== 'string')
	        throw "parameter must be string, " + (typeof toCut) + " passed";
	    
	    var toReturn = this;
	    
	    var last = toReturn.lastIndexOf(toCut);
	    if (last > 0)
	    {
	        while (last >= 0)
	        {
	            toReturn = toReturn.slice(0, last);
	            last = toReturn.lastIndexOf(toCut);
	        }
	    }
	    else
	        return this;
	    
	    return toReturn;    
	}
	
}

if(!inString('ltrim')) {
	
	//Add JSDoc comment
	String.prototype.ltrim = function(toCut){
	    if (!toCut)
	        toCut = " ";
	    
	    if (typeof toCut !== 'string')
	        throw "parameter must be string, " + (typeof toCut) + " passed";
	    
	    var toReturn = this;
	    
	    var first = toReturn.indexOf(toCut);
	    if (first !== 0)
	        return this;
	    else
	    {
	        while (first === 0)
	        {
	            toReturn = toReturn.slice(toCut.length, toReturn.length);
	            first = toReturn.indexOf(toCut);
	        }
	    }
	    
	    return toReturn;    
	}
	
}

if(!inString('trimOff')) {
	
	//Add JSDoc comment
	String.prototype.trimOff = function(toCut){
	    if (!toCut)
	        toCut = " ";
	    
	    if (this.rtrim && this.ltrim)
	        return this.rtrim(toCut).ltrim(toCut);
	    else
	        throw "rtrim and ltrim prototypes required";
	}
	
}

if(!inString('random')) {
	
	//Add JSDoc comment
	String.prototype.random = function(length, possibleChars) {
		if (!length)
			length = 5;
		
		var toReturn = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		if (possibleChars)
			possible = possibleChars;
		
		for( var i=0; i < length; i++ )
			toReturn += possible.charAt(Math.floor(Math.random() * possible.length));
			
		return toReturn;
	};
	
}
