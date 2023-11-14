//Exemplo de uma classe
class Spacecraft {
    constructor (public propulsor: string){};

    // O código acima é o mesmo que: 

    // public propulor: string
    //
    // constructor (propulsor: string){
    // this.propulsor = propulsor
    //}

    jumpIntoHyperSpace(){
        console.log(`Entering Hyperspace with ${this.propulsor}`)
    }
    //Ao utilizar um atributo da classe dentro do método, sempre usar this ou os métodos de acesso
}

let ship = new Spacecraft('hyperdrive')

//Interface a ser implementada
interface Containership {
    cargoContainers: number
    
}

export {Spacecraft, Containership};