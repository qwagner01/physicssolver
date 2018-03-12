class Obj {

  constructor(m, vol, dens, la, distX, velXi, velXf, velXa, aX, Ftx, hI, hF, distY, velYi, velYf, velYa, aY, Fty, ) {
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

    this.solve = function(t) {
      if (isNaN(this.m)) {
        m.value = this.solveMass();
      }
      if (isNaN(this.vol)) {
        vol.value = this.solveVolume();
      }
      if (isNaN(this.dens)) {
        dens.value = this.solveDensity();
      }
      if (isNaN(this.la)){
        la.value = this.solveLaunchAngle();
      }
      if (isNaN(this.distX)) {
        distX.value = this.solveDistanceX(t);
      }
      if (isNaN(this.velXi)) {
        velXi.value = this.solveVelocityXi(t);
      }
      if (isNaN(this.velXf)) {
        velXf.value = this.solveVelocityXf(t);
      }
      if (isNaN(this.velXa)) {
        velXa.value = this.solveVelocityXa(t);
      }
      if (isNaN(this.aX)) {
        aX.value = this.solveAccelerationX(t);
      }
      if (isNaN(this.Ftx)) {
        Ftx.value = this.solveForceTotalX();
      }
      if (isNaN(this.hI)) {
        hI.value = this.solveHeightI(t);
      }
      if (isNaN(this.hF)) {
        hF.value = this.solveHeightF(t);
      }
      if (isNaN(this.distY)) {
        distY.value = this.solveDistanceY(t);
      }
      if (isNaN(this.velYi)) {
        velYi.value = this.solveVelocityYi(t);
      }
      if (isNaN(this.velYf)) {
        velYf.value = this.solveVelocityYf(t);
      }
      if (isNaN(this.velYa)) {
        velYa.value = this.solveVelocityYa(t);
      }
      if (isNaN(this.aY)) {
        aY.value = this.solveAccelerationY(t);
      }
      if (isNaN(this.Fty)) {
        Fty.value = this.solveForceTotalY();
      }
    }

  }

  solveMass() {
    var ans;
    if (!isNaN(this.dens) && !isNaN(this.vol)) {
      ans = this.dens / this.vol;
    } else if (!isNaN(this.Ftx) && !isNaN(this.aX)) {
      ans = this.Ftx / this.aX;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveVolume() {
    var ans;
    if (!isNaN(this.dens) && !isNaN(this.m)) {
      ans = this.dens / this.m;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveDensity() {
    var ans;
    if (!isNaN(this.vol) && !isNaN(this.m)) {
      ans = this.m / this.vol;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveLaunchAngle() {
    var ans;
    if (!isNaN(this.velXi) && !isNaN(this.velYi)) {
      ans = Math.atan(this.velYi / this.velXi);
    } else if (!isNaN(this.velXi) && !isNaN(this.velTi)) {
      ans = Math.acos(this.velXi / this.velTi);
    } else if (!isNaN(this.velYi) && !isNaN(this.velTi)) {
      ans = Math.asin(this.velYi / this.velTi);
    } else {
      ans = this.msg;
    }
  }

  solveDistanceX(t) {
    var ans;
    if (!isNaN(this.velXa) && !isNaN(t)) {
      ans = this.velXa * t;
    } else if (!isNaN(this.velXi) && !isNaN(t) && !isNaN(this.aX)) {
      ans = (this.velXi * t) + (.5 * this.aX * Math.pow(t, 2));
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveVelocityXi(t) {
    var ans;
    if (!isNaN(this.velXf) && !isNaN(this.aX) && !isNaN(t)) {
      ans = this.velXf - (this.aX * t);
    } else if (!isNaN(this.distX) && !isNaN(this.aX) && !isNaN(t)) {
      ans = (this.distX / t) - ((this.aX * t) / 2);
    } else if (!isNaN(this.velXf) && !isNaN(this.aX) && !isNaN(this.distX)) {
      ans = Math.sqrt(this.velXf - (2 * this.aX * this.distX));
    } else if (!isNaN(this.velXf) && !isNaN(this.distX) && !isNaN(t)) {
      ans = 2 * (this.distX / t) - this.velXf;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveVelocityXf(t) {
    var ans;
    if (!isNaN(this.velXi) && !isNaN(this.aX) && !isNaN(t)) {
      ans = this.velXi + (this.aX * this.distX);
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveVelocityXa(t) {
    var ans;
    if (!isNaN(this.distX) && !isNaN(t)) {
      ans = this.distX / t;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveAccelerationX(t) {
    var ans;
    if (!isNaN(this.velXi) && !isNaN(this.velXf)) {
      ans = (this.velXf - this.velXi) / t;
    } else if (!isNaN(this.Ftx) && !isNaN(this.m)) {
      ans = this.Ftx / this.m;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveForceTotalX() {
    var ans;
    if (!isNaN(this.m) && !isNaN(this.aX)) {
      ans = this.m * this.aX;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveHeightI(t) {
    var ans;
    if (!isNaN(this.hF) && !isNaN(this.distY)) {
      ans = this.hF + this.distY;
    } else if (!isNaN(this.velYa) && !isNaN(this.hF) && !isNaN(t)) {
      ans = this.hF + (this.velYa * t);
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveHeightF(t) {
    var ans;
    if (!isNaN(this.hI) && !isNaN(this.distY)) {
      ans = this.hI - this.distY;
    } else if (!isNaN(this.velYa) && !isNaN(this.hI) && !isNaN(t)) {
      ans = this.hI - (this.velYa * t);
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveDistanceY(t) {
    var ans;
    if (!isNaN(this.hI) && !isNaN(this.hF)) {
      ans = this.hF - this.hI;
    } else if (!isNaN(this.velYa) && !isNaN(t)) {
      ans = this.velY * t;
    } else if (!isNaN(this.velYi) && !isNaN(this.velYf) && !isNaN(t)) {
      ans = (this.velYi + this.velYf) / 2 * t;
    } else if (!isNaN(this.velYi) && !isNaN(this.aY) && !isNaN(t)) {
      ans = (this.velYi * t) + (.5 * this.aY * Math.pow(t, 2));
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveVelocityYi(t){
    var ans;
    if (!isNaN(this.velYf) && !isNaN(this.aY) && !isNaN(t)) {
      ans = this.velYf - (this.aY * t);
    } else if (!isNaN(this.distY) && !isNaN(this.aY) && !isNaN(t)) {
      ans = (this.distY / t) - ((this.aY * t) / 2);
    } else if (!isNaN(this.velYf) && !isNaN(this.aY) && !isNaN(this.distY)) {
      ans = Math.sqrt(this.velYf - (2 * this.aY * this.distY));
    } else if (!isNaN(this.velYf) && !isNaN(this.distY) && !isNaN(t)) {
      ans = 2 * (this.distY / t) - this.velYf;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveVelocityYf(t) {
    var ans;
    if (!isNaN(this.velYi) && !isNaN(this.aY) && !isNaN(t)) {
      ans = this.velYi + (this.aY * this.distY);
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveVelocityYa(t) {
    var ans;
    if (!isNaN(this.distY) && !isNaN(t)) {
      ans = this.distY / t;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveAccelerationY() {
    var ans;
    if (!isNaN(this.velYi) && !isNaN(this.velYf)) {
      ans = (this.velYf - this.velYi) / t;
    } else if (!isNaN(this.Fty) && !isNaN(this.m)) {
      ans = this.Fty / this.m;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveForceTotalY() {
    var ans;
    if (!isNaN(this.m) && !isNaN(this.aY)){
      ans = this.m * this.aY;
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveDistanceT(t) {
    var ans;
    if (!isNaN(this.distX) && !isNaN(this.distY)){
      ans = Math.sqrt(Math.pow(2, this.distX) + Math.pow(2, this.distY));
    }
  }

  solveVelocityTi() {
    var ans
    if (!isNaN(this.velXi) && !isNaN(this.velYi)){
      ans = Math.sqrt(Math.pow(2, this.velXi) + Math.pow(2, this.velYi));
    } else if (!isNaN(this.la) && !isNaN(this.velXi)) {
      ans = this.velXi / Math.cos(this.la);
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveVelocityTf() {
    var ans;
    if (!isNaN(this.velXf) && !isNaN(this.velYf)){
      ans = Math.sqrt(Math.pow(2, this.velXf) + Math.pow(2, this.velYi));
    } else {
      ans = this.msg;
    }
    return ans;
  }

  solveVelocityTa(t){
    var ans;
    if (!isNaN(this.distX) && !isNaN(this.distY) && !isNaN(t)){
      ans = (Math.sqrt(Math.pow(2, this.distX) + Math.pow(2, this.distY))) / t;
    } else {
      ans = this.msg;
    }
    return ans;
  }

}
