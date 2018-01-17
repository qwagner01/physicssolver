var m;
var vol;
var dens;
// var Vxi;
// var p;

$(document).ready(function() {
  // $('.property').on("change keyup", solve);
  // $('.property').val("");
  getElements();
  $('#solve').on('click', solve)
});

function getElements(){
  var mass = document.getElementById('mass');
  var volume = document.getElementById('volume');
  var density = document.getElementById('density');
  // var velocity_x_initial = document.getElementById('velocity_x_initial');
  // var momentum = document.getElementById('momentum');
  // assignElements();
}

function assignElements(){
  getElements();
  m = parseFloat(mass.value);
  vol = parseFloat(volume.value);
  dens = parseFloat(density.value);
  // Vxi = parseFloat(velocity_x_initial.value);
  // p = parseFloat(momentum.value);
}
