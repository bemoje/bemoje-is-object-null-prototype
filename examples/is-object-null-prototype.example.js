import isObjectNullPrototype from '../src/is-object-null-prototype'

isObjectNullPrototype(Object.create(null))
//=> true

isObjectNullPrototype({})
//=> false

isObjectNullPrototype('asd')
//=> false
