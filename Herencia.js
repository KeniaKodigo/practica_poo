/**
 * La subclase hereda atributos y metodos de la clase Padre
 */

class Persona{
    nombre
    apellido
    direccion

    constructor(nombre, apellido, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }

    capturarDatos(){
        return " Datos Personales\n" + 
        "Nombre Completo: " + this.nombre + " " + this.apellido + "\n" + "Direccion: " + this.direccion;
    }
}

class Estudiante extends Persona{
    carnet
    telefono
    institucion

    constructor(nombre, apellido, direccion, carnet, telefono, institucion){
        //Llamando al constructor padre
        super(nombre, apellido, direccion);
        this.carnet = carnet;
        this.telefono = telefono;
        this.institucion = institucion;
    }

    informacionEstudiantil(){
        return "Informacion Estudiantil\n" + "Carnet: " + this.carnet + "\n"
         + "Telefono: " + this.telefono + "\n" + "Institucion: " + this.institucion;
    }

    

}

//Instancion el objeto estudiante
let estudiante1 = new Estudiante("Kevin Alexis","Hernandez","Tejutla","KH125",784512,"Instituto Tecnologico");
console.log(estudiante1.capturarDatos());
console.log(estudiante1.informacionEstudiantil());

