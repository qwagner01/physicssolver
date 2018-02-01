class Obj {

  constructor(_m, _vol, _dens, _distX, _velXi, _velXf, _velXa, _Ftx, _aX, _hI, _hF, _distY, _velYi, _velYf, _velYa, _Fty, _aY) {
    this.m = parseFloat(_m.value);
    this.vol = parseFloat(_vol.value);
    this.dens = parseFloat(_dens.value);
    this.distX = parseFloat(_distX.value);
    this.velXi = parseFloat(_velXi.value);
    this.velXf = parseFloat(_velXf.value);
    this.velXa = parseFloat(_velXa.value);
    this.Ftx = parseFloat(_Ftx.value);
    this.aX = parseFloat(_aX.value);
    this.hI = parseFloat(_hI.value);
    this.hF = parseFloat(_hF.value);
    this.distY = parseFloat(_distY.value);
    this.velYi = parseFloat(_velYi.value);
    this.velYf = parseFloat(_velYf.value);
    this.velYa = parseFloat(_velYa.value);
    this.Fty = parseFloat(_Fty.value);
    this.aY = parseFloat(_aY.value);
    this.msg = "Could Not Solve";

    this.solve = function(t) {
      if (isNaN(this.m)) {
        _m.value = this.solveMass();
      }
      if (isNaN(this.vol)) {
        _vol.value = this.solveVolume();
      }
      if (isNaN(this.dens)) {
        _dens.value = this.solveDensity();
      }
      if (isNaN(this.distX)) {
        _distX.value = this.solveDistanceX(t);
      }
      if (isNaN(this.velXi)) {
        _velXi.value = this.solveVelocityXi(t);
      }
      if (isNaN(this.velXf)) {
        _velXf.value = this.solveVelocityXf(t);
      }
      if (isNaN(this.velXa)) {
        _velXa.value = this.solveVelocityXa(t);
      }
      if (isNaN(this.aX)) {
        _aX.value = this.solveAccelerationX(t);
      }
      if (isNaN(this.Ftx)) {
        _Ftx.value = this.solveForceTotalX();
      }
      if (isNaN(this.hI)) {
        _hI.value = this.solveHeightI(t);
      }
      if (isNaN(this.hF)) {
        _hF.value = this.solveHeightF(t);
      }
      if (isNaN(this.distY)) {
        _distY.value = this.solveDistanceY(t);
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
      ans = (this.dist / t) - ((this.aX * t) / 2);
    } else if (!isNaN(this.velXf) && !isNaN(this.aX) && !isNaN(this.distX)) {
      ans = Math.sqrt(this.velXf - (2 * this.aX * this.distX));
    } else if (!isNaN(this.velXf) && !isNaN(this.distX) && !isNaN(t)) {
      ans = 2 * (this.distX / t) - velXf;
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

}
