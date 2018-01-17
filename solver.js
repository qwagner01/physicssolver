function solve(){
  assignElements();
  solveMass();
  solveVolume();
  solveDensity();
}

function solveMass(){
  // assignElements();
  if (!isNaN(dens) && !isNaN(vol)){
    m = dens/vol;
    mass.value = m;
  }
  else{
    return;
  }
}

function solveVolume(){
  // assignElements();
  if (!isNaN(dens) && !isNaN(m)){
    vol = dens/m;
    volume.value = vol;
  }
  else{
    return;
  }
}

function solveDensity(){
  // assignElements();
  if (!isNaN(vol) && !isNaN(m)){
    dens = m/vol;
    density.value = dens;
  }
  else{
    return;
  }
}
