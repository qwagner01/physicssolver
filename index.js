$(document).ready(function() {
  // $('.property').on("change keyup", solve);
  // $('.property').val("");
  getElements();
  $('#solve').on('click', solve)
});

function getElements() {
  var mass = document.getElementById('mass');
  var volume = document.getElementById('volume');
  var density = document.getElementById('density');
}

function solve() {
  var m = parseFloat(mass.value);
  var vol = parseFloat(volume.value);
  var dens = parseFloat(density.value);
  obj1 = new Object(m, vol, dens);
  obj1.log;
  if (isNaN(obj1.m)) {
    mass.value = obj1.solveMass();
  }
  if (isNaN(obj1.vol)) {
    volume.value = obj1.solveVolume();
  }
  if (isNaN(obj1.dens)) {
    density.value = obj1.solveDensity();
  }
}
