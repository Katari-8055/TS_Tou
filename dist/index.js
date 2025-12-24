function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice'));
const userName = 'Bob';
console.log(greet(userName));
//inferance and anotation
//notaion me batana padta hai kaun sa type hai but inference me automaticly typescript detect kar leti hai
//upar vala example me ham anotation ka use kiye hai
//--------------------Custum data type-------------------//
let apiRequest = 'failure';
apiRequest = 'pendding';
let orders = ["12", "23", "37", "89"];
let shopOrder;
for (let order of orders) {
    if (order == '23') {
        shopOrder = order;
    }
}
console.log(shopOrder);
export {};
//# sourceMappingURL=index.js.map