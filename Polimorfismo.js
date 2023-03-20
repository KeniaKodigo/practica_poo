/**
 * Polimorfismo: Es la capacidad de sobreescribir un metodo y cambiar su comportamiento
 */

class Animal{
    nombre
    color
    raza

    constructor(nombre, color, raza){
        this.nombre = nombre;
        this.color = color;
        this.raza = raza;
    }

    imprimirDatos(){
        return "Nombre: " + this.nombre + "\n"
         + "Color: " + this.color + "\n" + "Raza: " + this.raza;
    }

    hacerSonido(){
        return "Los animales hacen su propio sonido";
    }
}

class Gatos extends Animal{

    constructor(nombre, color, raza){
        super(nombre, color, raza);
    }

    //Sobreescribiendo al metodo
    hacerSonido(){
        return "Los gatos hacen miau miau";
    }
}

class Perro extends Animal{
    constructor(nombre, color, raza){
        super(nombre, color, raza);
    }

    //Sobreescribiendo al metodo
    hacerSonido(){
        return "Los perros hacen wuauf wuauf";
    }
}

let gatos = new Gatos("Pancho","negro","angora");
console.log(gatos.imprimirDatos());
console.log(gatos.hacerSonido());

let perro = new Perro("Black","cafe","Pastor Aleman");
console.log(perro.imprimirDatos());
console.log(perro.hacerSonido());

