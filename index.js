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
  var time = document.getElementById('time');
  var t = parseFloat(time.value);
  return t;
}

function getObject1(){
  var obj = new Object(mass, volume, density, distanceX,
    velocityXi, velocityXf, velocityXa, forceTotalX, accelerationX);
  return obj;
}

function getElements() {
  var mass = document.getElementById('mass');
  var volume = document.getElementById('volume');
  var density = document.getElementById('density');
  var distanceX = document.getElementById('distanceX');
  var velocityXi = document.getElementById('velocityXi');
  var velocityXf = document.getElementById('velocityXf');
  var velocityXa = document.getElementById('velocityXa');
  var forceTotalX = document.getElementById('forceTotalX');
  var accelerationX = document.getElementById('accelerationX');
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
}
