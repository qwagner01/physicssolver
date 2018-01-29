$(document).ready(function() {
  getElements();
  $('.property').on("change keyup", getObject1);
  // var len = $('.property').length
  $('#solve1').on('click', solve1);
  $('#solve1').click(function(event) {
    event.preventDefault();
  });
});

function getTime() {
  var time = document.getElementById('time')
  var t = parseFloat(time.value);
  return t;
}

function getObject1(){
  var obj = new Object(mass, volume, density, distanceX,
    velocityXi, velocityXf, velocityXa, forceTotalX, accelerationX,
    heightI, heightF, distanceY, velocityYi, velocityYf, velocityYa,
    forceTotalY, accelerationY);
  return obj;
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

function solve1() {
  var obj1 = getObject1();
  var t = getTime();
  if (isNaN(obj1.m)) {
    mass.value = obj1.solveMass();
  }
  if (isNaN(obj1.vol)) {
    volume.value = obj1.solveVolume();
  }
  if (isNaN(obj1.dens)) {
    density.value = obj1.solveDensity();
  }
  if (isNaN(obj1.distX)) {
    distanceX.value = obj1.solveDistanceX(t);
  }
  if (isNaN(obj1.velXi)) {
    velocityXi.value = obj1.solveVelocityXi(t);
  }
  if (isNaN(obj1.velXf)) {
    velocityXf.value = obj1.solveVelocityXf(t);
  }
  if (isNaN(obj1.velXa)) {
    velocityXa.value = obj1.solveVelocityXa(t);
  }
  if (isNaN(obj1.aX)) {
    accelerationX.value = obj1.solveAccelerationX(t);
  }
  if (isNaN(obj1.Ftx)) {
    forceTotalX.value = obj1.solveForceTotalX();
  }
  if (isNaN(obj1.hI)){
    heightI.value = obj1.solveHeightI(t);
  }
  if (isNaN(obj1.hF)){
    heightF.value = obj1.solveHeightF(t);
  }
  if (isNaN(obj1.distY)){
    distanceY.value = obj1.solveDistanceY(t);
  }
}
