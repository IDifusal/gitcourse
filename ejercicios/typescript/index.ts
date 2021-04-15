//Boolean
let muted: boolean = true;
 muted = false;
 //Arreglos
 let people: string[] = [];
 people = ['Isabel', 'Nicollo','Isaias'];
 people.push("9000")

 let peopleAndNumbers: Array<string | number> = [];
 peopleAndNumbers.push('Ricardo');
 peopleAndNumbers.push(123);

 //Enum

 enum Color{
     Rojo,
     Verde,
     Azul
 }

 let colorFavorito: Color = Color.Rojo
// console.log(`Mi color favorito es ${colorFavorito}`)

 //Any
 let comodin: any ="Joker"
 comodin = {type:'Wilcard'}
//Objet
let someOject:object 
//Funciones
function add(a: number, b: number): number{
    return a+b:
}
add(20,20)

function createAdder(a: number): (number)=>number {
    return function (b: number){
        return a+ b;
    }
}

const addFour = createAdder(4)
const foutPlus6 = addFour(6)

function fullName(fristName: string, lastName: string="Perez"): string{
    return `${fristName} ${lastName}`;
}

const richard = fullName("Richard");
console.log(richard)
