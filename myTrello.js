const idCreator = Math.floor(Math.random() * 90000000) + 10000000;
var task = {
  description: "spesuccia",
};

var assignTo = [
  { id: idCreator, nome: "Roberto", cognome: "LaPorta" },
  { id: idCreator, nome: "Gabriele", cognome: "Culotta" },
]; //array di persone
var priority = [
  { id: 1, level: "low" },
  { id: 2, level: "medium" },
  { id: 3, level: "high" },
];
var completed = false;

const taskList = [
  {
    id: 50,
    task: "quello non completato",
    assignTo: assignTo[0].nome,
    priority: priority[1].level,
    completed: false,
  },
  {
    id: idCreator,
    task: "quello completato",
    assignTo: assignTo[0].nome,
    priority: priority[1].level,
    completed: true,
  },
]; // array di task

///////////////// Function ADD ////////////////////

// const add = (task, assignTo, priority) => {
//   const obj = {
//     id: idCreator,
//     task: task,
//     assignTo: assignTo,
//     priority: priority,
//     completed: false,
//   };
//   return [...taskList, obj];
// };

// console.log(add(task.description, assignTo[1].nome, priority[2].level));

////////////////// Function REMOVE //////////////////

// const remove = (taskList, idDaEliminare) => {
//   const filtrato = taskList.filter((el) => el.id !== idDaEliminare);
//   return filtrato;
// };

// const remotion = remove(taskList, 50);
// console.log(remotion);

///////////////// Function MODIFY //////////////////

// const modify = (taskId, nuovaDescription, taskList) => {
//   const mappato = taskList.map((el) => {
//     if (el.id === taskId) {
//       el.description = nuovaDescription;
//     }
//   });
//   return mappato;
// };

// const modificato = modify(50, "Finire myTrello", taskList);
// console.log(modificato, taskList);

///////////////// Function toggle completed ////////////////

// const toggle = (taskList) => {
//   const completati = taskList.filter((el) => el.completed !== false);
//   return completati;
// };
// const soloCompletati = toggle(taskList);

// console.log(soloCompletati);
