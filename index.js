const personService = require('./services/person/personService');

const personPayload = {
  full_name: 'Guilherme',
  age: 27,
  skills_tags: ['node', 'go']
};

personService.create(personPayload)
.then(console.log);
