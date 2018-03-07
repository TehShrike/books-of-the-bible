const json = require(`./index.json`)

const assert = require(`assert`)

assert(Array.isArray(json), `Is an array`)
assert.equal(json.length, 66, `Correct number of books`)
