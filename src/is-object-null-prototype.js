/**
 * Determine whether a value is a null-prototype object.
 * @param {*} value - The value
 * @returns {boolean}
 */
export default function isObjectNullPrototype(value) {
	return Object.getPrototypeOf(value) === null
}
