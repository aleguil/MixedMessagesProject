//Define random resources
const noun=['bird','mongoose','wolf','bear'];
const verb=['paces','sleeps','awakes','wanders'];
const adverb=['peacefully','obliviously','calmly','steadily'];
//Randomizer function
function randomizer(array1,array2,array3){
    let word1=array1[Math.floor(Math.random()*array1.length)];
    let word2=array2[Math.floor(Math.random()*array2.length)];
    let word3=array3[Math.floor(Math.random()*array3.length)];
    return `The ${word1} ${word2} ${word3}.`;
}
console.log(randomizer(noun,verb,adverb));