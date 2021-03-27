module.exports = function dateSample(sampleActivity) {
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
let age;
let  sampleActivityNum=+sampleActivity
  if(
  typeof sampleActivity!=='string'
|| sampleActivity===undefined
  ||sampleActivityNum<0
  ||sampleActivityNum===0
  ||sampleActivityNum> MODERN_ACTIVITY
  ||typeof sampleActivityNum!=='number'
  ||isNaN(sampleActivityNum))
  {return false}
  const k=0.693/HALF_LIFE_PERIOD;
  age=Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k)
  return age
};
