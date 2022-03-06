const person = {};

const setProp = (obj, key, value) => {
   return {...obj, [key]: value};
};

const getProp = (obj, key) => {
   if (obj) {
      return obj[key];
   }
};

const newPerson = setProp(person, 'name', 'Jeff');

console.log(newPerson);