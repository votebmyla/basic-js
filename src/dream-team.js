const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let team = '';
  if(Array.isArray(array)){
    for(let element of array){
      if(typeof element == 'string'){
        element = element.trim();
        team = team + element[0];
      }
    }
    team = team.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }

  return team;
};
