// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(array, string) {
    return array.filter(function(match){
        return match.toLowerCase() === string.toLowerCase();
    })
}
// console.log(findMatching(drivers, "bobby"))

function fuzzyMatch(array, string){
    return array.filter(function(matchChars){
        return matchChars.toLowerCase().indexOf(string.toLowerCase()) === 0
    })
}
// console.log(fuzzyMatch(drivers, 'y'))

const driverObjects = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(array, string){
    return array.filter(function (matchObject){
        return matchObject.name === string
    })
}
// console.log(matchName(driverObjects, 'Bobby'))