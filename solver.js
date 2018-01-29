function Object(m, vol, dens, distX, velXi, velXf, velXa, Ftx, aX, hI, hF, distY, velYi, velYf, velYa, Fty, aY) {
  this.m = parseFloat(m.value);
  this.vol = parseFloat(vol.value);
  this.dens = parseFloat(dens.value);
  this.distX = parseFloat(distX.value);
  this.velXi = parseFloat(velXi.value);
  this.velXf = parseFloat(velXf.value);
  this.velXa = parseFloat(velXa.value);
  this.Ftx = parseFloat(Ftx.value);
  this.aX = parseFloat(aX.value);
  this.hI = parseFloat(hI.value);
  this.hF = parseFloat(hF.value);
  this.distY = parseFloat(distY.value);
  this.velYi = parseFloat(velYi.value);
  this.velYf = parseFloat(velYf.value);
  this.velYa = parseFloat(velYa.value);
  this.Fty = parseFloat(Fty.value);
  this.aY = parseFloat(aY.value);
  this.msg = "Could Not Solve";

  this.solveMass = function() {
    var ans;
    if (!isNaN(this.dens) && !isNaN(this.vol)) {
      ans = this.dens / this.vol;
      return ans;
    } else if (!isNaN(this.Ftx) && !isNaN(this.aX)) {
      ans = this.Ftx / this.aX;
      return ans;
    } else {
      return this.msg;
    }
  }

  this.solveVolume = function() {
    var ans;
    if (!isNaN(this.dens) && !isNaN(this.m)) {
      ans = this.dens / this.m;
      return ans;
    } else {
      return this.msg;
    }
  }

  this.solveDensity = function() {
    var ans;
    if (!isNaN(this.vol) && !isNaN(this.m)) {
      ans = this.m / this.vol;
      return ans;
    } else {
      return this.msg;
    }
  }
  this.solveDistanceX = function(t) {
    var ans;
    if (!isNaN(this.velXa) && !isNaN(t)) {
      ans = this.velXa * t;
      return ans;
    } else if (!isNaN(this.velXi) && !isNaN(t) && !isNaN(this.aX)) {
      ans = (this.velXi * t) + (.5 * this.aX * Math.pow(t, 2));
      return ans;
    } else {
      return this.msg;
    }
  }

  this.solveVelocityXi = function(t) {
    var ans;
    if (!isNaN(this.velXf) && !isNaN(this.aX) && !isNaN(t)) {
      ans = this.velXf - (this.aX * t);
      return ans;
    } else if (!isNaN(this.distX) && !isNaN(this.aX) && !isNaN(t)) {
      ans = (this.dist / t) - ((this.aX * t) / 2);
      return ans;
    } else if (!isNaN(this.velXf) && !isNaN(this.aX) && !isNaN(this.distX)) {
      ans = Math.sqrt(this.velXf - (2 * this.aX * this.distX));
      return ans;
    } else if (!isNaN(this.velXf) && !isNaN(this.distX) && !isNaN(t)) {
      ans = 2 * (this.distX / t) - velXf;
      return this.msg;
    } else {
      return this.msg;
    }
  }

  this.solveVelocityXf = function(t){
    var ans;
    if (!isNaN(this.velXi) && !isNaN(this.aX) && !isNaN(t)) {
      ans = this.velXi + (this.aX * this.distX);
      return ans;
  } else {
    return this.msg;
  }
}

  this.solveVelocityXa = function(t) {
    var ans;
    if (!isNaN(this.distX) && !isNaN(t)) {
      ans = this.distX / t;
      return ans;
    } else {
      return this.msg;
    }
  }

  this.solveAccelerationX = function(t) {
    var ans;
    if (!isNaN(this.velXi) && !isNaN(this.velXf)) {
      ans = (this.velXf - this.velXi) / t;
      return ans;
    } else if (!isNaN(this.Ftx) && !isNaN(this.m)) {
      ans = this.Ftx / this.m;
      return ans;
    } else {
      return this.msg;
    }
  }

  this.solveForceTotalX = function() {
    var ans;
    if (!isNaN(this.m) && !isNaN(this.aX)) {
      ans = this.m * this.aX;
      return ans;
    } else {
      return this.msg;
    }
  }
  this.solveHeightI = function(t){
    var ans;
    if (!isNaN(this.hF) && !isNaN(this.distY)){
      ans = this.hF + this.distY;
      return ans;
    } else if (!isNaN(this.velYa) && !isNaN(this.hF) && !isNaN(t)){
      ans = this.hF + (this.velYa * t);
      return ans;
  } else {
    return this.msg;
    }
  }

  this.solveHeightF = function(t){
    var ans;
    if (!isNaN(this.hI) && !isNaN(this.distY)) {
      ans = this.hI - this.distY;
      return ans;
    } else if (!isNaN(this.velYa) && !isNaN(this.hI) && !isNaN(t)) {
      ans = this.hI - (this.velYa * t);
      return ans;
    } else{
      return this.msg;
    }
  }

  this.solveDistanceY = function(t){
    var ans;
    if (!isNaN(this.hI) && !isNaN(this.hF)){
      ans = this.hF - this.hI;
      return ans;
    } else if (!isNaN(this.velYa) && !isNaN(t)){
      ans = this.velY * t;
      return ans;
    } else if (!isNaN(this.velYi) && !isNaN(this.velYf) && !isNaN(t)){
      ans = (this.velYi + this.velYf)/2 * t;
      return ans;
    } else if (!isNaN(this.velYi) && !isNaN(this.aY) && !isNaN(t)){
      ans = (this.velYi * t) + (.5 * this.aY * Math.pow(t, 2));
      return ans;
    }
    else {
      return this.msg;
    }
  }
}
