const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  

  try{
    if(date == null){
      return 'Unable to determine the time of year!';
    }

    if(isNaN(Number(date))){
      throw new Error(`"${date}" is not a Date() object`);
    } else{

      let month = date.getMonth();
    
      if(month >= 2 && month < 5){
        return 'spring';
      } else if (month >= 5 && month < 8){
        return 'summer';
      } else if (month >= 8 && month < 11){
        return 'autumn';
      } else if (month >= 0 && month < 2 || month == 11){
        return 'winter';
      }
    }
  }catch(err){
    
    throw err.name;
  }

};
