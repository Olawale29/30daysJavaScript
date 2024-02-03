for (country of countriesx) {
  const { name, capital, population, languages } = country;
  console.log(
    `Name: ${name}, Capital: ${capital}, Population: ${population}. Language(s): ${languages}`
  );
}

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const [name, skills, score, JsScore = 90, reactScore = 95] = student;
console.log(name, skills, score, JsScore, reactScore);

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (stud) => {
  const studentArr = [];
  for (const [name, skills, scores] of stud) {
    const obj = {
      name: `${name}`,
      skills: `${skills}`,
      scores: `[${scores}]`,
    };
    studentArr.push(obj);
  }
  return studentArr;
};
console.log(convertArrayToObject(students));

const studentx = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = { ...studentx };
console.log(newStudent);
for (const key in newStudent) {
    if(key === 'skills'){
        const obj = {
            skills: "Bootstrap",
            level: 8
          };
        newStudent.skills.frontEnd.push(obj);
        const obj2 = {
            skills: "Express",
            level: 9
          };
          newStudent.skills.backEnd.push(obj2);
          const obj3 = {
            skills: "SQL",
            level: 8
          };
          newStudent.skills.dataBase.push(obj3);
          newStudent.skills.dataScience.push('SQL')
    }
}
console.log(newStudent);
