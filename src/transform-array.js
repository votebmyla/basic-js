const CustomError = require("../extensions/custom-error");


module.exports = function transform(array){
  try{
    if(!Array.isArray(array)){
      throw new Error(`"${array} is not an array"`);
    }
    let result = array.slice(0);
    let transformedArr = [];
    for (let i = 0; i < result.length; i++){
      switch(result[i]){
        case '--discard-next':
          delete result[i];
          if(i != (result.length-1)){
            delete result[i+1];  
          }
          break;
        case '--discard-prev':
          delete result[i];
          if(i != 0){
            result[i-1] = result[i];
          }
          break;
        case '--double-next':
         delete result[i];
          if(i != (result.length-1)){
            result[i] = result[i+1];
          }
          break;
        case '--double-prev':
          delete result[i];
          if(i != 0){
            result[i] = result[i-1];
          }
          break;
      }
    }
    for (element of result){
      if(element != undefined){
        transformedArr.push(element);
      }
    }
    return transformedArr;
  } catch(err){
    throw err.name;
  }
}