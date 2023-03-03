// let message = 'Welcome to Ukraine!'
// let element = []
// for (let index = 0; index < message.length; index++) {
//     element[index] = message.slice(index,index+1);
    
// }


// console.log(element)

// console.log(message.indexOf("l"))

// console.log(element.join(""))


const cafe= {
    name: 'Republic',
    width:200,
    height: 300,
    personal:5,
    hr: true 
}

for(let i = 0 ; i<Object.keys(cafe).length ; i++){
    console.log(Object.entries(cafe)[i])
    console.log(cafe.width*cafe.height)
}