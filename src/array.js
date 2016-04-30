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