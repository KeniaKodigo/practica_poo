
class Abuelo{
    dinero_abuelo

    herenciaAbuelo(dinero){
        this.dinero_abuelo = dinero;
        return "El abuelo tiene: " + this.dinero_abuelo;
    }
}

function Abuelo(){
    this.dinero;

    this.obtenerDinero = function(){

    }
}

class Padre extends Abuelo{
    dinero_padre

    herenciaPadre(dinero){
        this.dinero_padre = dinero + this.dinero_abuelo;
        return "El papa tiene: " + this.dinero_padre;
    }
}

class Hijo extends Padre{
    dinero_hijo

    herenciaHijo(dinero){
        this.dinero_hijo = dinero + this.dinero_padre;
        return "El hijo tiene: " + this.dinero_hijo;
    }
}

//Instanciando
let hijo = new Hijo();
hijo.dinero_abuelo = 2000;
//hijo.dinero_padre = 3000;
hijo.herenciaPadre(3000);
console.log(hijo.herenciaHijo(1500));