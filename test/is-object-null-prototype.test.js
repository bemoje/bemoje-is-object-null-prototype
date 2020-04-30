import isObjectNullPrototype from '../src/is-object-null-prototype'

describe('isObjectNullPrototype', () => {
	test('works', () => {
		expect(isObjectNullPrototype(Object.create(null))).toBe(true)
		expect(isObjectNullPrototype({})).toBe(false)
		expect(isObjectNullPrototype('asd')).toBe(false)
	})
})
