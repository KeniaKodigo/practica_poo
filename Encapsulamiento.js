
/** Tipo de modificadores de acceso:
 *  public => acceso general(la misma clase, clases heredadas, instancia)
 *  private => hay acceso dentro de la clase
 *  protected => acceso (dentro de la clase y clases heredadas)
 * 
 *  En javascriot tomamos el public, private
 */

class Cuenta{
    nombre
    #numero_cuenta //declarando el atributo privado
    direccion
    telefono
    apellido

    /** Inicializar un objeto */
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    //METODOS GET Y SET
    //set => capturamos la informacion de la variable privada
    set capturarNumeroCuenta(numero_cuenta){
        this.#numero_cuenta = numero_cuenta;
    }

    //get => Retornamos la informacion
    get imprimirNumeroCuenta(){
        return "Este es tu numero de cuenta: " + this.#numero_cuenta;
    }

    capturarDatos(){
        return "Nombre Completo: " + this.nombre + "\n" + "Direccion: " + this.direccion + "\n" +
                "Telefono: " + this.telefono;
    }

    //Asignando metodos privados
    #capturarPassword(){
        return "Tu contraseña es 123";
    }

    Imprimir(){
        return this.#capturarPassword();
    }
}

//Instanciando el objeto
let cuenta1 = new Cuenta("Ezequiel Alvarez","San Salvador",7589412);
cuenta1.capturarNumeroCuenta = "EZ45789412";
console.log(cuenta1.capturarDatos());
console.log(cuenta1.Imprimir());
console.log("/**************************************/");
let cuenta2 = new Cuenta("Daysi Carolina","Cabañas",7941258);
console.log(cuenta2.capturarDatos());

