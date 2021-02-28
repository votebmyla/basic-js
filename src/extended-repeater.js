const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
   
  let separator;
  if(options.separator == undefined){
    separator = '+';
  }else{
    separator = String(options.separator);
  }
  
  let repeatTimes;
  if(options.repeatTimes == undefined){
    repeatTimes = options.repeatTimes;
  }else{
    repeatTimes = Number(options.repeatTimes);
  }
  
  let addition; 
  if(options.addition == undefined){
    addition = options.addition;
  }else{
    addition = String(options.addition);
  }
    
  let additionSeparator;
  if(options.additionSeparator == undefined){
    additionSeparator = '|';
  }else{
    additionSeparator = String(options.additionSeparator); 
  }
  
  let additionRepeatTimes;
  if(options.additionRepeatTimes == undefined){
    additionRepeatTimes = options.additionRepeatTimes;
  }else{
    additionRepeatTimes = Number(options.additionRepeatTimes);
  }
  
  
  function additionHandler(addition='', additionSeparator, additionRepeatTimes = 1){
    let res = (addition + additionSeparator).repeat(additionRepeatTimes);
    let finalResult = res.slice(0, -(additionSeparator.length));
    return finalResult;
  }
  
  function strHandler(str, separator, repeatTimes = 1){
    let res = (str+additionHandle+separator).repeat(repeatTimes);
    let finalResult = res.slice(0, -(separator.length));
    return finalResult;
    
  }
  
  let additionHandle = additionHandler(addition, additionSeparator, additionRepeatTimes);
  let strHandle = strHandler(str, separator, repeatTimes);
  
  return strHandle;
  
};
  