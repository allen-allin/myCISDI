	
	/*
	function CISDI_Cal(x) {
	    function result(y) {
	        return CISDI_Cal(x + y);
	    }
	    result.toString = function() {
	        return x;
	    }
	    return result;
	}*/

	// es6 写法
	function CISDI_Cal(x) {
		var result = (y) => CISDI_Cal(x + y);
		result.toString = () => x;
		return result;
	}
	
