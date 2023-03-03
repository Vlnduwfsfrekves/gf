// for (na of Arr2){
//     console.log(na)
//     console.log(typeof(na))
// }

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     }
// let total = 0;
// for (let n = 0 ; n>Object.keys(salaries) ; n++){
//     total+=Object.keys(salaries)[n]
// }


let calculator = {};
calculator.read = function(a,b){
    calculator.ref1 = a;
    calculator.ref2 = b
}
calculator.sum = function(){
    console.log(calculator.ref1+calculator.ref2)
}
calculator.mult = function(){
    console.log(calculator.ref1*calculator.ref2)
}