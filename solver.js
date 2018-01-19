function Object(m, vol, dens, distX, velXa, Ftx, aX) {
  this.m = m;
  this.vol = vol;
  this.dens = dens;
  this.distX = distX;
  this.velXa = velXa;
  this.Ftx = Ftx;
  this.aX = aX;

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
