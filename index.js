$(document).ready(function() {
  var len = $('.property').length;
  getElements();
  $('.property').on("change keyup", getObject1);
  $('#solve1').on('click', main);
  $('#solve1').click(function(event) {
    event.preventDefault();
  });
});

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
  var obj = new Object(mass, volume, density, distanceX,
    velocityXi, velocityXf, velocityXa, forceTotalX, accelerationX,
    heightI, heightF, distanceY, velocityYi, velocityYf, velocityYa,
    forceTotalY, accelerationY);
  return obj;
}

function main() {
  var obj1 = getObject1();
  var t = getTime();
  obj1.solve(t);
}
