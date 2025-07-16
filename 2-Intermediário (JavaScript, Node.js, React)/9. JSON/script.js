let professor = {
    name: 'Adam sousa',
    idade: 23,
    isActive: true,
    cursos: [
        {titulo: 'programação 1', vagas: 40},
        {titulo: 'programação 2', vagas: 20},
        {titulo: 'programação 3', vagas: 10}
    ]
};

console.log(typeof professor);

let professorJson = JSON.stringify(professor);
console.log(typeof professorJson);
console.log(professorJson);

let professorNormal = JSON.parse(professorJson);
console.log(typeof professorNormal);
console.log(professorNormal);

let schedule = `{
"meetups": [
  { "title": "Conference 1", "date": "2017-11-30T12:00:00.000Z" },
  { "title": "Conference 2", "date": "2017-04-18T12:00:00.000Z" }
]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log("Date: " + schedule.meetups[1].date.getDate());

