$(document).ready(function() {
  getElements();
  var len = $('.property').length;
  $('#solve1').click(button(event));
  $('#solve2').click(button(event));
  $('.property').on("change keyup", getObject1);
  // $('.property').on("change keyup", getObject2);
  $('#solve1').on('click', solve1);
  // $('#solve2').on('click', solve2);
});

function button(event) {
  event.preventDefault();
}

function getElements() {
  var mass = $('#mass');
  var volume = $('#volume');
  var density = $('#density');
  var distanceX = $('#distanceX');
  var velocityXi = $('#velocityXi');
  var velocityXf = $('#velocityXf');
  var velocityXa = $('#velocityXa');
  var forceTotalX = $('#forceTotalX');
  var accelerationX = $('#accelerationX');
  var heightI = $('#heightI');
  var heightF = $('#heightF');
  var distanceY = $('#distanceY');
  var velocityYi = $('#velocityYi');
  var velocityYf = $('#velocityYf');
  var velocityYa = $('#velocityYa');
  var forceTotalY = ('#forceTotalY');
  var accelerationY = $('#accelerationY');
}

function getTime() {
  var time = document.getElementById('time');
  var t = parseFloat(time.value);
  return t;
}

function getObject1() {
  var obj = new Obj(mass, volume, density, distanceX,
    velocityXi, velocityXf, velocityXa, forceTotalX, accelerationX,
    heightI, heightF, distanceY, velocityYi, velocityYf, velocityYa,
    forceTotalY, accelerationY);
  return obj;
}

function solve1() {
  var obj1 = getObject1();
  var t = getTime();
  obj1.solve(t);
}

function solve2(){
  var obj2 = getObject2();
  var t = getTime();
  obj2.solve(t);
}
