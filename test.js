import json from "./index.js"

import assert from "node:assert"

assert(Array.isArray(json), `Is an array`)
assert.equal(json.length, 66, `Correct number of books`)

for (const book of json) {
  assert(typeof book.name === "string", `Has a name`)
  assert(Array.isArray(book.aliases), `Has aliases`)
}
