// Arr1[Arr1.length] = 22
// let g = Arr1.length
// for(let i = 0 ; i<g ; i++){
//     console.log(Arr1[i])
// }

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0

let tyu = Object.keys(salaries)

let inr = Object.keys(salaries).length

for(let i = 0 ; i <= inr-1 ; i++){
    sum +=salaries[tyu[i]]
}