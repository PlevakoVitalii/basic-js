// module.exports = function countCats(matrix) {
//   let cnt=0;
//   const rowLength=matrix.length;
//   for(let i=0; i<rowLength;i+=1) {
//     const colLength=matrix[i].length;
//     for(let j=0; j<colLength; j+=1){
//    if (matrix[i][j]=='^^'){cnt+=1 }
//     }
//   }
//   return cnt;
// };


module.exports = function countCats(matrix) {
  let counter=0;
  
  for(let i=0; i<matrix.length;i++) {
    for(let j=0; j<matrix[i].length;j++){
   if (matrix[i][j]==='^^'){counter++ }
    }
  }
  return counter;
};