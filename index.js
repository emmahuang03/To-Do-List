var name = $('.name').val();
var toDo = $('.toDo').val();
var nameButton = $('#name');
var toDoButton = $('#toDo');
var title = $('h1');
var fill = $('p');

nameButton.on("click", call);
toDoButton.on("click", list);

function call(){
  var name = $('.name').val();
  title.text(`${name}'s To-Do List!`);
  $('.name').val("");
}

function list(){
  var toDo = $('.toDo').val();
  fill.append(`<p>${toDo}</p>`);
  $('.toDo').val("");
}
