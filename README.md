## *Jonay Méndez Márquez*

### *alu0101347141*
# **DSI - Práctica 6**

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

### Clase DC

        export class DC extends Fighter {
          constructor(nombre: string, altura: number, peso: number,
              ataque: number, defensa: number, velocidad: number, hp: number,
              protected nombreReal: string, protected nemesis: string[],
              protected poderes: string[], protected activo: boolean, protected frases: string[]) {
            super(nombre, 'dc', altura, peso, ataque, defensa, velocidad, hp, frases);
          }
          //
          // Funciones
          //
        }

#### Atributos

Un luchador de DC tendrá los siguientes atributos específicos:
  - nombreReal: string -> Nombre de la persona tras la máscara
  - nemesis: string[] -> Conjunto de personajes a los que se enfrenta con frecuencia
  - poderes: string[] -> Lista de habilidades y armas que utilice el personaje
  - activo: boolean -> Atributo que indica si el personaje sigue activo o no en su universo.

Además de los atributos concretos, a la hora de instanciar un objeto de esta clase deberán pasársele a través del constructor los atributos de la clase Fighter, que se canalizarán a través de la función _super()_.

#### Funciones

##### Getter de nombreReal

      getNombreReal(): string {
        return this.nombreReal;
      }

##### Getter de nemesis

      getNemesis(): string[] {
        return this.nemesis;
      }

##### Getter de poderes

      getPoderes(): string[] {
        return this.poderes;
      }

##### Getter de activo

      isActive(): boolean {
        return this.activo;
      }
  
### Clase Marvel

        export class Marvel extends Fighter {
          constructor(nombre: string, altura: number, peso: number,
              ataque: number, defensa: number, velocidad: number, hp: number,
              protected nombreReal: string, protected nemesis: string[],
              protected poderes: string[], protected afiliaciones: string[], protected frases: string[]) {
            super(nombre, 'marvel', altura, peso, ataque, defensa, velocidad, hp, frases);
          }
          //
          // Funciones
          //
        }


#### Atributos

Un luchador de Marvel tendrá los siguientes atributos específicos:
  - nombreReal: string -> Nombre de la persona tras la máscara
  - nemesis: string[] -> Conjunto de personajes a los que se enfrenta con frecuencia
  - poderes: string[] -> Lista de habilidades y armas que utilice el personaje
  - afiliaciones: string[] -> Conjunto de equipos y alianzas de las que sea miembro

Además de los atributos concretos, a la hora de instanciar un objeto de esta clase deberán pasársele a través del constructor los atributos de la clase Fighter, que se canalizarán a través de la función _super()_.

#### Funciones

##### Getter de nombreReal

      getNombreReal(): string {
        return this.nombreReal;
      }

##### Getter de nemesis

      getNemesis(): string[] {
        return this.nemesis;
      }

##### Getter de poderes

      getPoderes(): string[] {
        return this.poderes;
      }

##### Getter de activo

      getAfiliaciones(): string[] {
        return this.afiliaciones;
      }

### Clase StarWars

        export class StarWars extends Fighter {
          constructor(nombre: string, altura: number, peso: number,
              ataque: number, defensa: number, velocidad: number, hp: number,
              protected planetaNatal: string, protected raza: string,
              protected portadorFuerza: boolean, protected titulos: string[], protected frases: string[]) {
            super(nombre, 'starwars', altura, peso, ataque, defensa, velocidad, hp, frases);
          }
          //
          // Funciones
          //
        }

#### Atributos

Un luchador de Star Wars tendrá los siguientes atributos específicos:
  - planetaNatal: string -> Planeta donde nació
  - raza: string -> Raza a la que pertenece
  - portadorFuerza: boolean -> Indica si tiene control sobre la Fuerza o no
  - titulos: string[] -> Conjunto títulos y reconocimientos que alberga

Además de los atributos concretos, a la hora de instanciar un objeto de esta clase deberán pasársele a través del constructor los atributos de la clase Fighter, que se canalizarán a través de la función _super()_.

#### Funciones

##### Getter de planetaNatal
      
      getPlanetaNatal(): string {
        return this.planetaNatal;
      }

##### Getter de raza

      getRaza(): string {
        return this.raza;
      }

##### Getter de portadorFuerza

      isPortadorFuerza(): boolean {
        return this.portadorFuerza;
      }

##### Getter de titulos

      getTitulos(): string[] {
        return this.titulos;
      }

### Clase DragonBall

      export class DragonBall extends Fighter {
        constructor(nombre: string, altura: number, peso: number,
            ataque: number, defensa: number, velocidad: number, hp: number,
          protected planetaNatal: string, protected especie: string,
          protected transformaciones: string[], protected fusiones: string[], protected frases: string[]) {
          super(nombre, 'dragonball', altura, peso, ataque, defensa, velocidad, hp, frases);
        }

#### Atributos

Un luchador de Dragon Ball tendrá los siguientes atributos específicos:
  - planetaNatal: string -> Planeta donde nació
  - especie: string -> Especie a la que pertenece
  - transformaciones: string[] -> Conjunto de transformaciones que ha alcanzado
  - fusiones: string[] -> Conjunto de fusiones que ha realizado con otros personajes

Además de los atributos concretos, a la hora de instanciar un objeto de esta clase deberán pasársele a través del constructor los atributos de la clase Fighter, que se canalizarán a través de la función _super()_.

#### Funciones

##### Getter de planetaNatal
      
      getPlanetaNatal(): string {
        return this.planetaNatal;
      }

##### Getter de especie

      getEspecie(): string {
        return this.especie;
      }

##### Getter de transformaciones

      getTransformaciones(): string[] {
        return this.transformaciones;
      }

##### Getter de fusiones

      getFusiones(): string[] {
        return this.fusiones;
      }

### Clase Combat
      
      type Universo = Marvel | DC | StarWars | DragonBall;

      export class Combat {
        constructor(protected adversarios: [Universo, Universo]) {};
        // 
        // Funciones
        //
      }

#### Atributos

- adversarios: [Universo, Universo]

Como se explicó al principio, la clase Combat contendrá una tupla de dos elementos, ambos de tipo Universo (donde Universo es la unión de tipos entre los distintos universos que se hayan implementado).

#### Funciones

##### Getter de los adversarios
      
      getAdversarios(): [Universo, Universo] {
        return this.adversarios;
      }

##### start() | Función para simular un combate

      start(): string {
        let turno: number;
        let iterador: number = 0;
        const dañoSufrido: [number, number] = [0, 0];
        console.log('*****************************');
        console.log(this.adversarios[0].getNombre() + ' VS ' + this.adversarios[1].getNombre());
        console.log('*****************************\n');
        while ((this.adversarios[0].getHp() > dañoSufrido[0]) && (this.adversarios[1].getHp() > dañoSufrido[1])) {
          turno = iterador % 2;
          console.log(this.adversarios[turno].getNombre() + ' ataca y dice: ' + this.adversarios[turno].talk() + '\n');
          switch (turno) {
            case 0:
              if (this.adversarios[0].getUniverso() == 'dragonball') {
                dañoSufrido[1] += 50 * (this.adversarios[0].getAtaque() / this.adversarios[1].getDefensa()) * 2;
              } if ((this.adversarios[0].getUniverso() == 'marvel') || (this.adversarios[0].getUniverso() == 'dc')) {
                dañoSufrido[1] += 50 * (this.adversarios[0].getAtaque() / this.adversarios[1].getDefensa()) * 1;
              } if (this.adversarios[0].getUniverso() == 'starwars') {
                dañoSufrido[1] += 50 * (this.adversarios[0].getAtaque() / this.adversarios[1].getDefensa()) * 0.5;
              }
              break;
            case 1:
              if (this.adversarios[1].getUniverso() == 'dragonball') {
                dañoSufrido[0] += 50 * (this.adversarios[1].getAtaque() / this.adversarios[0].getDefensa()) * 2;
              } if ((this.adversarios[0].getUniverso() == 'marvel') || (this.adversarios[0].getUniverso() == 'dc')) {
                dañoSufrido[0] += 50 * (this.adversarios[1].getAtaque() / this.adversarios[0].getDefensa()) * 1;
              } if (this.adversarios[0].getUniverso() == 'starwars') {
                dañoSufrido[0] += 50 * (this.adversarios[1].getAtaque() / this.adversarios[0].getDefensa()) * 0.5;
              }
              break;
          }
          console.log('\tSalud restante de los combatientes:');
          console.log('\t--------------------------------');
          console.log('\t' + this.adversarios[0].getNombre(), '= ', (this.adversarios[0].getHp()-dañoSufrido[0]).toFixed());
          console.log('\t' + this.adversarios[1].getNombre(), '= ', (this.adversarios[1].getHp()-dañoSufrido[1]).toFixed(), '\n');
          iterador++;
        }
        let vencedor: string = 'El vencedor del combate es: ';
          dañoSufrido[0] >= this.adversarios[0].getHp() ? vencedor += this.adversarios[1].getNombre() : vencedor += this.adversarios[0].getNombre();
          console.log(vencedor);
          return vencedor;
      }

Esta función es una mejora directa de la función implementada en la práctica anterior. En esta ocasión, considerándolo más apropiado, he decidido introducir los bloques _if()_ dentro de cada _case_ del _switch()_. El primer _case_ se activará cuando le toque al primer adversario, y el otro cuando le toque al segundo. Esto se calcula con el módulo 2 del iterador, consiguiendo que las iteraciones impares del _while()_ sean para el segundo adversario y las pares para el primero. Este _while()_ terminará cuando el daño sufrido por alguno de los dos adversarios sea mayor que su _HP_. 

A la hora de calcular la efectividad de los ataques, se ha tenido en cuenta la naturaleza de los distintos universos. Un personaje de Dragon Ball, universo con leyes físicas prácticamente inexistentes e inmesurables cantidades de poder, atacará con mayor efectividad. Un personaje de Marvel o de DC, ambos universos de superhéroes bastante similares, atacarán con una efectividad media (ni sumará ni restará al daño aplicado). Por último, un personaje de Star Wars tendrá una menor efectividad, pues sus personajes son considerablemente más débiles que la gran mayoría de personajes del resto de universos. 

### Clase Pokedex
      
      type Universo = Marvel | DC | StarWars | DragonBall;

      export class Pokedex {
        constructor(protected elementos: Universo[]) {}
        //
        // Funciones
        //
      }

#### Atributos

- elementos: Universo[]

Como se explicó al principio, la clase Pokedex contendrá una tupla de elementos de tipo Universo (donde Universo es la unión de tipos entre los distintos universos que se hayan implementado).

#### Funciones

##### Getter de lista

      getLista(): Universo[] {
        return this.elementos;
      }

##### Función para añadir uno o varios elementos

      añadir(elementos: [Universo, ...Universo[]]) {
        for (let i: number = 0; i < elementos.length; i++) {
          this.elementos.push(elementos[i]);
        }
      }

##### Función para borrar uno o varios elementos

      borrar(elementos: [string, ...string[]]) {
        for (let i: number = 0; i < this.elementos.length; i++) {
          for (let j: number = 0; j < elementos.length; j++) {
            if (this.elementos[i].getNombre() == elementos[j]) {
              this.elementos.splice(i, 1);
            }
          }
        }
      }