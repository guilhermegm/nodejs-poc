const t = require('tcomb-validation');
const Person = require('../schemas/models');

const validate = t.validate;

module.exports = (personPayload) => {
  if (!validate(personPayload, Person).isValid()) {
    console.log('Not Valid');
    return;
  }

  return [Person(personPayload)];
};
