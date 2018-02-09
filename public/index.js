$(document).ready(function() {
  getElements();
  var len = $('.property').length;
  $('#solve1').click(button(event));
  $('#solve2').click(button(event));
  $('.property').on("change keyup", getObject1);
  $('.property').on("change keyup", getObject2);
  $('#solve1').on('click', solve1);
  $('#solve2').on('click', solve2);
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
  var mass_2 = $('#mass_2');
  var volume_2 = $('#volume_2');
  var density = $('#density_2');
  var distanceX_2 = $('#distanceX_2');
  var velocityXi_2 = $('#velocityXi_2');
  var velocityXf_2 = $('#velocityXf_2');
  var velocityXa_2 = $('#velocityXa_2');
  var forceTotalX_2 = $('#forceTotalX_2');
  var accelerationX = $('#accelerationX_2');
  var heightI_2 = $('#heightI_2');
  var heightF_2 = $('#heightF_2');
  var distanceY_2 = $('#distanceY_2');
  var velocityYi_2 = $('#velocityYi_2');
  var velocityYf_2 = $('#velocityYf_2');
  var velocityYa_2 = $('#velocityYa_2');
  var forceTotalY_2 = ('#forceTotalY_2');
  var accelerationY_2 = $('#accelerationY_2');
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

function getObject2() {
  var obj = new Obj(mass_2, volume_2, density_2, distanceX_2,
    velocityXi_2, velocityXf_2, velocityXa_2, forceTotalX_2, accelerationX_2,
    heightI_2, heightF_2, distanceY_2, velocityYi_2, velocityYf_2, velocityYa_2,
    forceTotalY_2, accelerationY_2);
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
