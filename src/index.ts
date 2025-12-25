function greet(name: string): string {
    return `Hello, ${name}!`;

}

// console.log(greet('Alice'));

const userName: string = 'Bob';

// console.log(greet(userName));

//inferance and anotation
//notaion me batana padta hai kaun sa type hai but inference me automaticly typescript detect kar leti hai
//upar vala example me ham anotation ka use kiye hai

//--------------------Use Union Data Type && Custum data type-------------------//
let sub: number | string = 'iM'

let apiRequest : 'pendding' | 'success' | 'failure' = 'failure';
apiRequest = 'pendding'

let orders = ["12", "23", "37", "89"];

let shopOrder: string | undefined;

for(let order of orders){
    if(order == '23'){
        shopOrder = order;
        //undefine dena padega kyoki agar shopOrder order 
        //se match nahi kiya to undefine dena padega
    }
}

// console.log(shopOrder);

//---------------------------------------- Type Guards-------------------------//

function getchai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai..`
    }
    return `Chai order: ${kind}`;
}

function serveChai(msg?: string){
    if(msg){
        console.log(`Serving ${msg}`);
    }

    return `Serving default masala chai`
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `small cutting chai...`
    }

    if(size === "medium" || size === "large"){
        return `make extra chai`
    }

    return `chai order ${size}`
}

//------instenceOf------//

class kulhadChai{
    serve(){
        return `Serving kulhad chai`
    }
}

class Cuttting{
    serve(){
        return `Serving kulhad chai`
    }
}

function serve(chai: kulhadChai | Cuttting){
    if(chai instanceof kulhadChai){
        return chai.serve();
    }
}

//-------Khud ke types----------//

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder{
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}
function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }

    return `Servung custom chai: ${item}`
}

//----------type ke andar type--------------//

type MasalaChai = {type: 'masala'; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElsichiChai = {type: "elsichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElsichiChai

function MakeChai(order: Chai){
    switch (order.type) {
        case 'masala':
            return 'Masala chai'
            break;
        case 'ginger':
               return 'Ginger chai'
               break;
        case 'elsichi':
            return 'Elsichi chai'
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }
}

// function isStringArray(arr: unknown):arr is string[]{
//     
// }


//-----------------Never-------------------//

let response:any = "42";
let numericLength:number = (response as string).length;

type Book = {
    name:string
}

let bookString = '{"name: "who moved my cheese}';
let bookObject = JSON.parse(bookString) as Book;// force fully type dena padata hai

//isi ko bolte hai type asserestion mean ham force fully karva rahe hai

console.log(bookObject.name);

let value:any
value = "chai"
value = [1,3,4]
value = 3.4

let newValue: unknown;

newValue  = "chai"
newValue = [1,3,4]
newValue = 3.4
//newValue.toUppercase() // yha par error ayega because of unknwon;
//type guard lagana padata hai
if(typeof newValue === 'string'){
    newValue.toUpperCase();
}

//