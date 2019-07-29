var name = $('.name').val();
var toDo = $('.toDo').val();
var nameButton = $('#name');
var toDoButton = $('#toDo');
var title = $('h1');
//var heading = localStorage.getItem('h1') || "Your To-Do List";
var fill = $('p');
var check = $('check');
var checkbox = $('.checkbox');


nameButton.on("click", call);
toDoButton.on("click", list);
check.on("click", check);
checkbox.on("click", click);

function call(){
  var name = $('.name').val();
  title.text(`${name}'s To-Do List!`);
  $('.name').val("");
}

function list(){
  var toDo = $('.toDo').val();
  fill.append(`<p> <input class = "checkbox" type = "checkbox"> ${toDo}</p>`);
  $('.toDo').val("");
}

function click(event){
  console.log(event.target.parentNode);
}

function check(){
  console.log();
}

// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
//
// }, false);
//
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
//
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
//
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//
// var myNodelist = document.getElementsByTagName("p");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//  var span = document.createElement("SPAN");
//  var txt = document.createTextNode("\u00D7");
//  span.className = "close";
//  span.appendChild(txt);
//  myNodelist[i].appendChild(span);
// }
//
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//  close[i].onclick = function() {
//    var div = this.parentElement;
//    div.style.display = "none";
//  }
// }
