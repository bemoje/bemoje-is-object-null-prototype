(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-object-null-prototype'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Determine whether a value is a null-prototype object.
	 * @param {*} value - The value
	 * @returns {boolean}
	 */
	function isObjectNullPrototype(value) {
		return Object.getPrototypeOf(value) === null
	}

	return isObjectNullPrototype;

})));
