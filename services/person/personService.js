const t = require('tcomb');
const tv = require('tcomb-validation');
const createPerson = require('../../domains/person/usecases/createPerson');
const personRepository = require('../../infrastructure/person/personRepository');

const validate = t.validate;

const Person = t.struct({
  full_name: t.String,
  age: t.Number,
  skills_tags: t.list(t.String)
});

const create = async (
  payload,
  personRepo = personRepository
) => {
  if (!validate(payload, Person).isValid()) {
    console.log('Not Valid');
    return;
  }

  const personPayload = {
    name: payload.full_name,
    age: payload.age,
    tags: payload.skills_tags
  }

  const newPerson = createPerson(personPayload);

  // const a = await personRepo.find({ cpf: newPerson.cpf });

  /* if (a.length > 0) {
    throw new Error('já cadastrado');
  } */

  return await personRepo.create(newPerson);
};

module.exports = {
  create
};
