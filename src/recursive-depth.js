const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(array){
    if(array.every(this.noArray)){
      return 1;
    } else{
      for(let element of array){
        if(Array.isArray(element)){
          array = array.flat();
          return 1 + this.calculateDepth(array);
        }
      }
    }
  }
  noArray(element){
    return !(Array.isArray(element));
  }
};