/**
 * Determine whether a value is a null-prototype object.
 * @param {*} value - The value
 * @returns {boolean}
 */
function isObjectNullPrototype(value) {
	return Object.getPrototypeOf(value) === null
}

export default isObjectNullPrototype;
