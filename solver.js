function Object(m, vol, dens) {
  this.m = m;
  this.vol = vol;
  this.dens = dens;

  this.log = console.log(this);

  this.solveMass = function() {
    if (!isNaN(this.dens) && !isNaN(this.vol)) {
      var ans = this.dens / this.vol;
      return ans;
    } else {
      return;
    }
  }

  this.solveVolume = function() {
    if (!isNaN(this.dens) && !isNaN(this.m)) {
      var ans = this.dens / this.m;
      return ans;
    } else {
      return;
    }
  }

  this.solveDensity = function() {
    if (!isNaN(this.vol) && !isNaN(this.m)) {
      var ans = this.m / this.vol;
      return ans;
    } else {
      return;
    }
  }
}
