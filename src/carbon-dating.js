const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity){
  if(typeof sampleActivity != 'string'){
    return false;
  }
  let activityNum = Number(sampleActivity);
  
  if(activityNum < HALF_LIFE_PERIOD && activityNum > 0){
    let age = Math.ceil(Math.log(MODERN_ACTIVITY/activityNum)/ (0.693 / HALF_LIFE_PERIOD));
    if(age<0){
      return false;
    }
    return age;
  } else{
    return false;
  }
};

