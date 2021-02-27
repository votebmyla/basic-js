const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = 'true'){
    this.direct = direct;
  }
  
  encrypt(message, key) {
    try{
      if(message == undefined || key == undefined){
        throw new Error('message or key not defined');
      }
      message = message.toUpperCase();
      key = this.keyHandler(message, key);
      let encryptMessage = '';
      for(let i = 0; i < message.length; i++){
        if(message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90){
          let encryptLetter = String.fromCharCode((message[i].charCodeAt(0)+key[i].charCodeAt(0))%26+65);
          encryptMessage = encryptMessage + encryptLetter;
        } else {
          encryptMessage = encryptMessage + message[i];
        }
      }
      return encryptMessage;
    } catch(error){
      throw error.message;
    }
  }
  
  /* Сорри за говнокод, но время поджимает */
  keyHandler(message, key){
    let k = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    if(key.length < message.length){
      for(let i = 0; i < message.length; i++){
      
        k = k + key[i % key.length];
      }
    }else{
      k = key;
    }
    let arrKey = k.split('');
    let sArr, eArr, res = [];
    let count = 0;
    
    for(let i = 0; i < message.length; i++){
      if(!(message.codePointAt(i) >= 65 && message.codePointAt(i) <= 90)){
        sArr = arrKey.slice(0, i);
        eArr = arrKey.slice(i);
        sArr.push(message[i]);
        arrKey = sArr.concat(eArr);
        res = arrKey.join('');
        count ++;
      } else {
        res = arrKey.join('');
      }
    }  
    return (res.slice(0, res.length-count));
  }
  
  decrypt(encrypt, key) {
    try{
      if(encrypt == undefined || key == undefined){
        throw new Error('message or key not defined');
      }
      key = this.keyHandler(encrypt, key);
      let decryptMessage = '';
      for(let i = 0; i < encrypt.length; i++){
        if(encrypt[i].charCodeAt(0) >= 65 && encrypt[i].charCodeAt(0) <= 90){
          let decryptLetter = String.fromCharCode(((encrypt[i].charCodeAt(0)-key[i].charCodeAt(0))+26)%26+65);
          decryptMessage = decryptMessage + decryptLetter;
        } else {
          decryptMessage = decryptMessage + encrypt[i];
        }
      }
      if(this.direct == false){
        return decryptMessage.split('').reverse().join('');
      } else{
        return decryptMessage;
      }
    } catch(error){
      throw error.name;
    }
  }
}


module.exports = VigenereCipheringMachine;
