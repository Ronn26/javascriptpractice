const marvel_heros =["Thor","Spiderman","Ironman"]
const dc_heros =["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_Heros = [...marvel_heros,...dc_heros]
// console.log(all_new_Heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Roshan"))
console.log(Array.from("Roshan"))
console.log(Array.from({name:"Roshan"}))


let score1=200
let score2=300
let score3=400
console.log(Array.of(score1,score2,score3))