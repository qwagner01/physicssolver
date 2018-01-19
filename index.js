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
  var m = parseFloat(mass.value);
  var vol = parseFloat(volume.value);
  var dens = parseFloat(density.value);
  var distX = parseFloat(distanceX.value);
  var velXa = parseFloat(velocityXa.value);
  var Ftx = parseFloat(forceTotalX.value);
  var aX = parseFloat(accelerationX.value);
  var obj = new Object(m, vol, dens, distX, velXa, Ftx, aX);
  return obj;
}


function getElements() {
  var mass = document.getElementById('mass');
  var volume = document.getElementById('volume');
  var density = document.getElementById('density');
  var distanceX = document.getElementById('distanceX');
  var velocityXa = document.getElementById('velocityXa')
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
  if (isNaN(obj1.velXa)) {
    velocityXa.value = obj1.solveVelocityXa(t);
  }
}
