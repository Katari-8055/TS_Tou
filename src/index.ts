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