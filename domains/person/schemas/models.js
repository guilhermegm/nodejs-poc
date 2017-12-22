const t = require('tcomb');

const Person = t.struct({
  name: t.String,
  age: t.Number,
  tags: t.list(t.String)
});

module.exports = Person;
