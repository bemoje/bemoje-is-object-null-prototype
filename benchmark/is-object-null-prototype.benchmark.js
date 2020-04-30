import fs from 'fs-extra'
import hirestime from 'hirestime'
import path from 'path'
import isObjectNullPrototype from '../src/is-object-null-prototype'

async function main() {
	const md = ['## Benchmark']

	// start timer
	const getElapsed = hirestime()

	// benchmark
	isObjectNullPrototype(undefined)

	// push results
	md.push(getElapsed.nanoseconds() + ' nanoseconds')

	// write results to file
	fs.writeFileSync(
		path.join(process.cwd(), 'benchmark', 'results.md'),
		md.join('\n'),
	)
}

//main()
