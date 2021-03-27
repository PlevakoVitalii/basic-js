module.exports = function createDreamTeam(members) {
  let resTeamName=[];
  if(!(members instanceof Array))return false;
  for (let i=0; i<members.length; i++){
    if( typeof members[i]==='string'){
     resTeamName.push(members[i].trim().charAt(0).toUpperCase())
   }    
  }
  return resTeamName.sort().join('')
};
