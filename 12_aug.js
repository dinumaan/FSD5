// let products = [
//   {
//     name: "IPhoneX",
//     category: "Electronics",
//     price: 80000,
//     quantity: 10,
//   },

//   {
//     name: "IPad",
//     category: "Electronics",
//     price: 100000,
//     quantity: 3,
//   },

//   {
//     name: "Maggi",
//     category: "Food",
//     price: 200,
//     quantity: 2,
//   },

//   {
//     name: "Pain Killer",
//     category: "Medicines",
//     price: 500,
//     quantity: 3,
//   },
// ];

// let arr = [3, 5, 7, 1, 2];

// for(let element of products){
//     console.log(element);
// }

// console.log("Welcome To Amazon");

// let shoppingCart = [];

// while (true) {
//   alert("Please respond with the number you want to buy (exit to exit):");

//   let displayItems = "";
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].quantity > 0) {
//       //displayItems += "\n" +(i+1) +"." + products[i].name + " : " + products[i].price + "₹";
//       displayItems += `\n ${i + 1} . ${products[i].name} : ${
//         products[i].price
//       }₹`;
//     }
//   }
//   alert(displayItems);
//   let choice = prompt("Enter your choice");
//   if (choice === "exit") {
//     let totalPrice = 0;
//     for (let item of shoppingCart) {
//       totalPrice += item.price;
//     }
//     alert("Your total bill is: " + totalPrice + "₹");
//     break;
//   } else {
//     let selectedItem = products[choice - 1];
//     selectedItem.quantity--;
//     shoppingCart.push(selectedItem);
//   }
// }

// let a = prompt(`Enter the value of item dilevered : `);
// let b = prompt("Enter the size of circle : ");
// let c = prompt(`Enter the starting Position : `);

// let x = parseInt(a);

// function dilever(a, b, c) {
//   if (c > b) {
//     console.log(`This Position doesn't exsist`);
//     return;
//   }

//   let dilevered = (a + c - 1) % b;

//   if (dilevered == 0) dilevered = b;

//   console.log(`The item is dilevered on position - ${dilevered}`);
// }

// dilever(a, b, c);


