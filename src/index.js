// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (value) => { return value; };
const createNotEnumerableProperty = (value) => { return Symbol(value); };
const createProtoMagicObject = () => {
	function magic(){};
    magic.prototype = magic.__proto__;
    return magic;
};

const incrementor = () => {};
const asyncIncrementor = () => {};
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