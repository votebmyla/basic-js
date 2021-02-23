const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined){
      this.chain.push(`( )~~`);
      return this;
    } else if(value == null){
      this.chain.push(`( ${value} )~~`);
      return this;
    } else {
      this.chain.push(`( ${value} )~~`);
      return this;
    }
  },
  removeLink(position) {
    try {
      if(!Number.isInteger(position) || position > this.chain.length || position <= 0){
        throw new Error(`"${position}" - not integer or out of range`);
      }
      this.chain.splice(position-1, 1);
      return this;
    } catch (error) {
      this.chain.splice(0)
      throw error.name;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('').slice(0, -2);
    this.chain.splice(0);
    return result;
  }
};

module.exports = chainMaker;
