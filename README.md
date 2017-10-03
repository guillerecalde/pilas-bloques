Pilas Bloques
=============

- Issues planificados para este sprint: [![Stories in Ready](https://badge.waffle.io/Program-AR/pilas-bloques.png?label=ready&title=Ready)](http://waffle.io/Program-AR/pilas-bloques)

- Rama master: [![Build Status](https://travis-ci.org/Program-AR/pilas-bloques.svg?branch=master)](https://travis-ci.org/Program-AR/pilas-bloques)
- Rama develop (principal): [![Build Status](https://travis-ci.org/Program-AR/pilas-bloques.svg?branch=develop)](https://travis-ci.org/Program-AR/pilas-bloques)

Esta es una versión hermana de [pilas-engine](http://www.pilas-engine.com.ar) pero
utilizando bloques, javascript y desafíos para aprender a programar.

![](screenshots/principal.png)
![](screenshots/desafios.png)
![](screenshots/editor.png)

¿Cómo empezar?
--------------

Generalmente, lo que se suele hacer inmeditamente después de clonar el repositorio es instalar lo necesario:

Para la dependencia node-gyp es necesario g++, si no lo tenés:
```
sudo apt-get install g++

```

Y también hay que asegurarse de tener node (actualmente compilamos con node 6)

Podemos lograrlo con nvm, para lo cual hay que instalarlo:
```
git clone https://github.com/creationix/nvm.git ~/.nvm
source ~/.nvm/nvm.sh
```

Y luego elegir la versión de node:

```
nvm install 6.11.3
nvm use 6.11.3
```

Luego, se puede escribir el comando ``make`` para ver las tareas disponibles:

![](screenshots/make.png)

Luego, para instalar las dependencias, compilar el módulo ejercicios_pilas y correr la aplicación, sencillamente:

```
make full
make serve
```

En general, para compilar diariamente, con `make serve` ya es suficiente.


Tests
-----

Para ejecutar los tests de la aplicación hay 3 opciones:

1. Ejecutar los test una sola vez:

```
  make test
```

2. Ejecutar los tests de forma contínua:


```
  ember test --watch
```

De todas formas, aunque no ejecutes los tests en forma local, en este
proyecto estamos usando travis para que los test se ejecuten siempre
después de cada "push":

https://travis-ci.org/Program-AR/pilas-bloques


Notas de versión
---------
* 1.3.1
 * El mayor cambio es la estructura interna: Existe la idea internamente (aunque por ahora oculta) de "libro" que agrupa un conjunto de actividades. Cada actividad y cada "libro" (manual) tienen un número, que se refleja en la URL (las url anteriores siguen siendo compatibles). Por ahora sigue habiendo un solo libro: el del Manual de Didactica de Programación y estamos trabajando en las actividades de un segundo libro.
 * Además, ahora blockly está actualizado y es actualizable. Por ejemplo, tenemos deshacer y rehacer, y zoom sobre los bloques, y mejoras al redimensionado.
 * Otro cambio interno: la forma de definir una actividad cambia: ahora la definición principal de una actividad es a través de un JSON, además de la escena hecha en Typescript usando PilasEngine Web, y una definición de los bloques centralizada en una biblioteca de bloques.
 * En La gran aventura, corregido el Escapar para que requiera estar en la misma casilla que el unicornio. Además, las animaciones ocurren solapadas en los lugares que debería.
 * Esta nueva versión de blockly agrega deshacer y rehacer al workspace, y también zoom y foco cuando el workspace es chico/grande.
 * Ahora todas las actividades tienen highlight de instrucciones con la ejecución.
 * En Instalando Juegos, se corrigieron las animaciones de cada comando para que se distingan entre sí.
 * Varios arreglos menores como alguna velocidad de ejecución, íconos, enunciados, y toolboxes incompletos.
 * Laberinto con queso ahora pone un queso al principio para forzar una estrategia en particular.
* 1.1.2
 * El notificador de versiones ahora sólo funciona en la versión descargable/offline (y se arregló un bug de comparación que hacía que avisara aún cuando la versión instalada fuera nueva).
 * Se elimininó el feature de que la solución persista en la URL. Esto se hizo para que al compartir la URL no vaya por defecto con la solución asociada.
 * Las categorías vuelven a estar alineadas a izquierda.
 * En "No me canso de saltar", el salto se hace más rápido, y no tiene un pequeño bug visual.
* 1.1.0
 * Se agregó un notificador de nueva versión para descargar.
 * Se hicieron arreglos sobre las animaciones y chequeos de actividad completada en: El gato en la calle, Tres naranjas, La gran aventura del mar encantado, Instalando Juegos, Tito (en todos sus sabores) y más.
* 1.0.9
 * Para testeo se deployan automáticamente en Travis dos ramas: master y develop.
* 1.0.8
  * Se unifica la creación interna de bloques utilizando siempre AccionBuilder
  * Se migran tests unitarios de ejerciciosPilas
* 1.0.7
  * Se agrega un deslizador para que se pueda ajustar manualmente el tamaño de la escena.
* 1.0.4
  * Se realizan las primeras pruebas en Travis.
* 1.0.3
  * Se agrega pilasweb como dependencia de Bower.
  * Correcciones al Detective Chaparro y a Laberinto Con Queso.
  * Se integra a Git toda la historia del repositorio ejerciciosPilas.
* 1.0.1
 * Se migró la aplicación offline de Node-Webkit a Electron. Esto hace que 1) ya no se soporte Windows XP y 2) se pueda instalar más fácilmente en otras versiones de Debian no-Huayra.
 * Se cambiaron las actividades de Parametrización para que usen valores direcciones en vez de comparar por Strings.
 * Se realizaron mejoras generales en links externos y la integración con el sistema.
 * Se hizo adaptable el diseño visual de la aplicación
 * Se agrega el código actual a la URL para que en un refresh no se pierda lo programado.
 * Se hizo que Pilas Web esté contenido en un iframe, lo que hace más prolijo el estado de Javascript de la página.
 * Se comenzó la migración de actividades a models de ember (usando mirage). Ahora las actividades también se acceden por id numérico (es el default).
 * Se mejoró el framework de testeo de integración.
 * Se actualizó el Acerca De.
 * Cambio a NodeJS 4

* 1.0.0
 * Incluye todos los desafíos hasta Parametrización Inclusive. Entonces, Pilas Bloques abarca todas las actividades del manual para docentes "La programación y su didáctica" sin el último capítulo (Interactividad).
 * Esto significa... ¡16 nuevas actividades! Con algunas mejoras respecto del manual para docentes. Por ejemplo, una mejora didácticamente importante es que no usamos strings.
 * ¡Ahora se pueden guardar soluciones a un archivo! (Y, por supuesto, cargar una solución desde un archivo)
 * En la propuesta del manual, se usaban "variables" para denotar funciones a falta de una mejor opción en Scratch. En un principio, en Pilas Bloques, se usó ese modelo. Pero ahora fue modificado para proveer un nombre apropiado: "Sensores numéricos".
 * Otra diferencia es que la categoría "Control" fue cambiada por dos categorías, "Repeticiones" y "Alternativas". ¿Por qué? Porque la visión de la programación como control de flujo es una visión _operativa_. Desde Program.AR creemos que la programación puede tener también una visión _declarativa_, que es más importante.
 * Algunas mejoras visuales, como los tableros (en Reparando la nave ó El Superviaje).
 * Ahora los íconos de los bloques están todos al inicio del bloque.
 * También se corrigió la redacción de los mismos.
 * Ahora las dos primeras actividades de "Alternativa condicional" avisan con una flecha que hay que volver a ejecutar para probar en varios escenarios.
* 0.11.0
 * Incluye todos los desafíos hasta Uso de Variables inclusive.
 * En "La gran aventura del mar encantado" se optó por una alternativa de personajes
 con menos prejuicios sociales, intentando abogar por igualdad de géneros.
 ¡Es la heroína quien debe rescatar al príncipe!
 * Se cambiaron los nombres de las categorías de bloques, la discusión conceptual
 continúa.
 * Se arreglaron los enunciados de los desafíos.
 * Se arreglaron los tableros que muestran contadores.
 * Se mejoró la integración con Analytics. Ahora se hace seguimiento por desafío visitado.
* 0.10.0
 * Primer versión con todos los desafíos hasta Alternativa Condicional inclusive.
