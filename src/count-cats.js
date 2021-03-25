const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let counter=[];
  
  for(let i=0; i<arr.length;i++) {
    for(let j=0; i<arr[i].length;j++){
   if (arr[i][j]=='^^'){counter.push(arr[i][j]) }

    }
  }
  return counter.length;
};
