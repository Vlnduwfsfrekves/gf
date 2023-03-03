// let Arr1 = [1, 5, '4', 'hello']
// let Arr2 = [true,2, {}, ['a'], 222]
// console.log(Arr1[1])
// console.log(Arr2[1])
// console.log(Arr1[1]+Arr2[1])

let user = {};
user.userName = "Vlad";
user.age = 12
user.showUserName = function(){
    console.log(user.userName)
}
user.updateAge = function(){
    user.age++
}

// { name: '🍎', price: 50 }

// { name: '🍇', price: 70 }

// { name: '🍋', price: 60 }

// { name: '🍓', price: 110 }


// const cart = {

//     items: [],

//     getItems() {},

//     add(product) {

//       for (const item of this.items) {

//         if (item.name === product.name) {

//           item.quantity += 1;

//           return;

//         }

//       }

//       const newProduct = {

//         ...product,

//         quantity: 1,

//       }

//       this.items.push(newProduct)

//     },

//     remove(productName) {delete items[{productName}]},

//     clear() {},

//     countTotalPrice() {},

//     increaseQuantity(productName) {},

//     decreaseQuantity(productName) {},

//   };
