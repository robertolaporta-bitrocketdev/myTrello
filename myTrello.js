const idCreator = Math.floor(Math.random() * 90000000) + 10000000;
var task = {
  description: "",
};
var taskList = []; // array di task
var assingTo = [
  { id: idCreator, nome: "Roberto", cognome: "LaPorta" },
  { id: idCreator, nome: "Gabriele", cognome: "Culotta" },
]; //array di persone
var priority = [
  { id: 1, level: "low" },
  { id: 2, level: "medium" },
  { id: 3, level: "high" },
];
