const persons = [
    {
        name: "Ana",
        age: 19
    },
    {
        name: "Maria",
        age: 12
    },
    {
        name: "Joana",
        age: 70
    },
    {
        name: "Sofia",
        age: 27
    },
    {
        name: "Carolina",
        age: 35
    },
    {
        name: "Pedro",
        age: 81
    },
    {
        name: "Lucas",
        age: 40
    },
    {
        name: "João",
        age: 65
    },
    {
        name: "Gabriel",
        age: 7
    },
    {
        name: "Mateus",
        age: 10
    }
];

/* Exibe o nome e idade de cada objeto */
console.log("persons: ", persons);

/* Exebindo somente a idade */
const agePersons = persons.map((person) => person.age);
console.log("agePersons: ", agePersons);

/* Exibe o nome */
const namePersons = persons.map((person) => person.name);
console.log("namePerson: ", namePersons);

/* Concatenando as informações */
const allInfosPersons = persons.map((person) => {
    return {
        name: person.name,
        age: person.age,
        nameAge: `${person.name} - ${person.age}`
    }
}
);
console.log("allInfosPersons: ", allInfosPersons);

/* Spreed do objeto: trás todas as informações contidas nele */
const allPersonsNow = persons.map((person) => {
    return {
        ...person,
        dateNow: new Date()
    }
}
);
console.log("allPersonsNow: ", allPersonsNow);

/* Substituindo uma chave do objeto original */
const newNamePersons = persons.map((person, index) => {
    return {
        ...person,
        name: `Usuário ${index}`
    }
}
);
console.log("allPersonsNow: ", newNamePersons);