const findTheOldest = function (people) {
  let oldest = people[0];
  let lastAge = 0;
  people.forEach((person) => {
    const currentAge = getAge(person);
    if (currentAge > lastAge) {
      oldest = person;
      lastAge = currentAge;
    }
  });
  return oldest;
};
function getAge(person) {
  if (person.yearOfBirth != undefined) {
    if (person.yearOfDeath != undefined) {
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return new Date().getFullYear() - person.yearOfBirth;
    }
  }
  return 0;
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
