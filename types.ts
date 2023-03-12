const now = new Date()
console.log(now.getHours())

const track = {
    duration: 120
}

class Planet {

}
const earth = new Planet()

const age: number = 3

let planets: string[]  = ['earth', 'mars']
planets = ['jupiter', 'mars']

class Phone { }
let phone: Phone = new Phone();

let product: { name: string; price: number } = {
    name: 'pen',
    price: 15
}

class Product { name: string; price: number } 
let p2 = new Product();

//Funtions
const printer = (content: string) => void = (content: string) => {
    console.log(content)
}

const multiply = (x:number, y:number): number => {
    return x * y;
}

//anonymous
function sum(x: number, y: number): number {
    return x + y;
}

const subtract = function sum(x: number, y: number): number {
    return x - y;
}

const printer2 = (content: string): void => {
    console.log(content);
}

const throwErr = (content: string): never => {
    throw new Error(content); //will never return!
}