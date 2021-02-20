const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
//  throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let cat = "^^";
  let count = 0;

  array.forEach(function(element){
    if(Array.isArray(element)){
      for(let el of element){
        if(el == cat){
          count ++;
        } else if(typeof element == "string" && element == cat){
          count ++;
        }
      }
    }
  });
  
  return count;
};
