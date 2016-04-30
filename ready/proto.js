var searchInPrototype = function(prop, proto) { return (prop in proto); };

var inString = function(prop) {

	if (searchInPrototype)
		return searchInPrototype(prop, String.prototype);

};

if(!inString('contains')) {	
    
	/**
	 * Check if a substring is contained in string
	 * @param   {string}  str        substring to search
	 * @param   {string}  startIndex index from start to search
	 * @returns {boolean} True if substring is contained, else false
	 */
	String.prototype.contains = function(str, startIndex) {
        
        if (typeof str !== 'string')
            return false;
        
        if (typeof startIndex !== 'number')
            startIndex = 0;
        
		return -1 !== String.prototype.indexOf.call(this, str, startIndex);
        
	};
 
 }
 
if(!inString('startsWith')) {
	
	/**
	 * Check if a string starts with a prefix
	 * @param   {string}  prefix Prefix to search
	 * @returns {boolean} True if string starts with prefix, else false
	 */
	String.prototype.startsWith = function(prefix) {
        
        if (typeof prefix !== 'string')
            return false;
        
		return this.indexOf(prefix) === 0;
        
	};
	
}

if(!inString('endsWith')) {
	
	/**
	 * Check if a string ends with a suffix
	 * @param   {string}  suffix Suffix to search
	 * @returns {boolean} True if ends with suffix, else false
	 */
	String.prototype.endsWith = function(suffix) {
        if (typeof suffix !== 'string')
            return false;
        
		if (this.length < suffix.length)
			return false;
		return this.lastIndexOf(suffix) === (this.length - suffix.length);
	};
	
}

if(!inString('capitalizeFirstLetter')) {
	
	/**
	 * Capitalize first letter of string
	 * @returns {string} String with first letter capitalized
	 */
	String.prototype.capitalizeFirstLetter = function () {        
        
	    return this.charAt(0).toUpperCase() + this.slice(1);
        
	}
	
}

if(!inString('rtrim')) {
	
	/**
	 * Trim all the "to cut" string from the right
	 * @param   {string} toCut String to cut, if ometted white space intended
	 * @returns {string} String right-trimmed
	 */
	String.prototype.rtrim = function(toCut){
        
        if (typeof toCut !== 'string')
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
	
	/**
	 * Trim all the "to cut" string from the left
	 * @param   {string} toCut String to cut, if ometted white space intended
	 * @returns {string} String left-trimmed
	 */
	String.prototype.ltrim = function(toCut){
        
	    if (typeof toCut !== 'string')
	        toCUt = " ";
	    
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
	
	/**
	 * Trim all the "to cut" string from the left and right
	 * @param   {string} toCut String to cut, if ometted white space intended
	 * @returns {string} String trimmed
	 */
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
	
	/**
	 * Generate random string
	 * @param   {number} length        Length of generated string, 5 if ometted
	 * @param   {string} possibleChars All possible chars, a-z A-Z 0-9 if ometted
	 * @returns {string} Generated string
	 */
	String.prototype.random = function(length, possibleChars) {
        if (typeof length !== 'number')
            length = 5;
		
		var toReturn = "";
        
		if (typeof possibleChars !== 'string')
			possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		
		for( var i=0; i < length; i++ )
			toReturn += possible.charAt(Math.floor(Math.random() * possible.length));
			
		return toReturn;
	};
	
}

var inArray = function(prop) {

	if (searchInPrototype)
		return searchInPrototype(prop, Array.prototype);

};

if(!inArray('contains')) {	
  
    /**
     * Remove all element occurence from array
     * @param   {object} element Element to remove
     * @returns {Array}  Array without element
     */
    Array.prototype.removeAll = function(element) {

        if (typeof element === 'undefined')
            return this;
        
        var toRemove = -1;
        var newArr = [];

        for (var i = 0; i < this.length; i++)
        {
            if (this[i] !== element)
                newArr.push(this[i]);
        }

        return newArr;

    }
    
}