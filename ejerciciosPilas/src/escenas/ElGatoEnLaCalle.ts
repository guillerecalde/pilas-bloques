/// <reference path = "EscenaActividad.ts" />
/// <reference path = "../actores/GatoAnimado.ts" />}

class ElGatoEnLaCalle extends EscenaActividad {
    fondo;
    automata;

    boton;
    fondoCuadricula;
    saltosFaltantes;

    iniciar() {

      this.fondo = new Fondo('fondo.gatoEnLaCalle.png',0,0);
      this.automata = new GatoAnimado(0,-150);
    }

    personajePrincipal(){
      return this.automata;
    }

    estaResueltoElProblema(){
      return false; // TODO: revisar esto. Como este ejercicio es de exploración, cualquier solución sería buena.
    }

}
