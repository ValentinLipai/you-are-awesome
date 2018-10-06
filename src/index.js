// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (value) => { return value; };
const createNotEnumerableProperty = (value) => { return Symbol(value); };
const createProtoMagicObject = () => {
	function magic(){};
    magic.prototype = magic.__proto__;
    return magic;
};

let incrementorCount = 0;
const incrementor = () => {    
	
	incrementorCount++;
	
	let increment = function() 
	{
		incrementorCount++;
		return increment;
	}
	
	increment.valueOf = function()
	{
		return incrementorCount;
	}
	
	return increment;
};

let aIncrementorCount = 0;
const asyncIncrementor = () => {
	
	aIncrementorCount++;
	
	let aIncrement = function() 
	{
		aIncrementorCount++;
		return aIncrementorCount;
	}
	
	aIncrement.valueOf = function()
	{
		return aIncrementorCount;
	}
	
	return aIncrement;
};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {return new String};
const toBuffer = () => {};
const sortByProto = (arr) => {return arr.sort();};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;