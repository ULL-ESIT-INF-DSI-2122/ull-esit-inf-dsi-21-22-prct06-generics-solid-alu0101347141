## *Jonay Méndez Márquez*

### *alu0101347141*
# **DSI - Práctica 5**

## Configuración de Coveralls

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101347141/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101347141?branch=main)

## Combates multiversales, plataforma de streaming y cifrado César.

A excepción del último ejercicio, que se ha podido desarrollar con tan solo una clase de dos funciones (cifrado y descifrado), para esta práctica se ha utilizado el conocimiento relacionado con el uso de clases genéricas y abstractas, así como de las interfaces, extendiendo las primeras e implementando las segundas para conseguir el entramado de tipos y funcionalidades que son requeridos para alcanzar los objetivos.

## Ejercicio 1 - Luchadores de distintos universos

La idea final de este ejercicio es conseguir simular un combate entre personajes procedentes de distintos universos, teniendo un personaje de X universo una serie de características compartidas con los de su mismo universo, pero que pueden ser distintas a las que comparten los personajes de un universo Y. Sin embargo, aunque luchadores de diferentes universos puedan tener rasgos distintos, sí que habrá una serie de rasgos (o, mejor dicho, atributos) comunes para todos los personajes, sin excepción (un nombre o una cantidad de vida \[HP] son dos ejemplos de esto). 

Sabiendo esto último, lo lógico es crear una clase que reúna esos **rasgos comunes** para cualquier luchador. Esta es la **clase Fighter**, y como cada luchador **deberá** tener además los **atributos específicos de su propio universo**, haremos que esta clase sea **abstracta**. Así, podremos usarla como punto común para luego extenderla en distintas clases, añadiendo así en cada caso los atributos que correspondan.

Estas clases herederas de Fighter servirán, cada una, para representar luchadores de un universo diferente. En este caso, serán los universos DC, Marvel, Star Wars y Dragon Ball. Nos quedará entonces la jerarquía tal que así:

  - abstract class Fighter
    * class DC
    * class Marvel
    * class StarWars
    * class DragonBall

Con eso desarrollado, podremos al fin implementar la **clase Combat**, que deberá contener una tupla de dos elementos (los dos adversarios que se batirán en duelo), con la característica fundamental de que tanto el primer como el segundo elemento de dicha tupla deben poder albergar luchadores de cualquiera de los universos representados. Es decir, si definimos el tipo:

        type Universo = Marvel | DC | StarWars | DragonBall;

La tupla de adversarios debe ser de la forma [Universo, Universo].

Finalmente, se pide también ampliar la funcionalidad de la **clase Pokedex** desarrollada en la práctica anterior, permitiendo ahora almacenar luchadores de todos los universos. Esto se conseguirá de la misma forma que con la clase Combat, salvo que en lugar de una tupla de dos elementos, el atributo con la base de datos debe ser un array de la forma Universo[].

Procede entonces la explicación de cada una de las clases que entran en juego en este ejercicio.

### Clase Fighter

        abstract class Fighter {
          constructor(protected readonly nombre: string, protected readonly universo: string, 
                      protected altura: number, protected peso: number,
                      protected ataque: number, protected defensa: number, 
                      protected velocidad: number, protected hp: number, 
                      protected frases: string[]) {}
          //
          // Funciones
          //
        }

#### Atributos

Los atributos que se consideran comunes para todos los luchadores son:
  - nombre: string -> Nombre del personaje
  - universo: string -> Nombre del universo al que pertenece
  - altura: number -> Altura del personaje
  - peso: number -> Peso del personaje
  - ataque: number -> Capacidad de ataque del personaje
  - defensa: number -> Capacidad de defensa del personaje
  - velocidad: number -> Puntuación de lo veloz que es el personaje
  - hp: number -> Vida del personaje (daño que puede soportar antes de caer fuera de combate)
  - frases: string[] -> Conjunto de frases típicas del personaje

Como puede obversarse, estos atributos se han declarado como **protected**, ya que queremos que sean accesibles tan solo para la propia clase o para aquellas que hereden de ella.

Además, se han declarado los atributos _nombre_ y _universo_ como **readonly**, ya que en ningún caso se modificará dicho valor. Los otros, como el peso, la altura o incluso el ataque de un personaje, son valores que quedan sujetos a una posible evolución del luchador.

#### Funciones

Para poder leer el valor de los atributos desde fuera de la jerarquía de herencia necesitaremos los famosos getters. Esta es la implementación de todos ellos.

##### Getter de nombre

      getNombre(): string {
        return this.nombre;
      }

##### Getter de universo

      getUniverso(): string {
        return this.universo;
      }

##### Getter de peso

      getPeso(): number {
        return this.peso;
      }

##### Getter de ataque
      
      getAtaque(): number {
        return this.ataque;
      }

##### Getter de defensa

      getDefensa(): number {
        return this.defensa;
      }

##### Getter de velocidad

      getVelocidad(): number {
        return this.velocidad;
      }

##### Getter de hp

      getHp(): number {
        return this.hp;
      }

##### Función para hablar

Y, finalmente, aunque también podría considerarse un getter (del atributo _frases_) se ha implementado esta función que devuelve aleatoriamente una de las frases guardadas en la array.

      talk(): string {
        return this.frases[Math.floor(Math.random() * (this.frases.length))];
      }