function Object(m, vol, dens, distX, velXa, Ftx, aX) {
  this.m = parseFloat(mass.value);
  this.vol = parseFloat(volume.value);
  this.dens = parseFloat(density.value);
  this.distX = parseFloat(distanceX.value);
  this.velXa = parseFloat(velocityXa.value);
  this.Ftx = parseFloat(forceTotalX.value);
  this.aX = parseFloat(accelerationX.value);

  this.solveMass = function() {
    var ans;
    if (!isNaN(this.dens) && !isNaN(this.vol)) {
      ans = this.dens / this.vol;
      return ans;
    } else if (!isNaN(this.Ftx) && !isNaN(this.aX)) {
      ans = this.Ftx / this.aX;
      return ans;
    } else {
      return;
    }
  }

  this.solveVolume = function() {
    var ans;
    if (!isNaN(this.dens) && !isNaN(this.m)) {
      ans = this.dens / this.m;
      return ans;
    } else {
      return;
    }
  }

  this.solveDensity = function() {
    var ans;
    if (!isNaN(this.vol) && !isNaN(this.m)) {
      ans = this.m / this.vol;
      return ans;
    } else {
      return;
    }
  }
  this.solveDistanceX = function(t) {
    var ans;
    if (!isNaN(this.velXa) && !isNaN(t)) {
      ans = this.velXa * t;
      return ans;
    } else {
      return;
    }
  }

  this.solveVelocityXa = function(t) {
    var ans;
    if (!isNaN(this.distX) && !isNaN(t)) {
      ans = this.distX / t;
      return ans;
    } else {
      return;
    }
  }
}
