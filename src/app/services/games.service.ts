import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  private listGames:any = [
    {
    name:"Changeling: the dreaming",
    description: "Juego donde Interpretas un hada que se oculta tras una identidad mortal",
    descriptiond: "La llegada del invierno en el que las hadas podrían desaparecer para siempre de la Tierra junto a los humanos quedando la propia tierra desolada. Arcadia, su mundo natal del que ninguna tiene recuerdos claros, al que ya no pueden volver y en el que parece que está sucediendo algo misterioso y puede que horrible, quizás una misteriosa guerra o un gran pesar. Las diferentes facciones, las cortes luminosa, oscura y sombría y la reciente guerra entre nobles y plebeyos. El Juego explora el equilibrio entre la imaginación y el pragmatismo, y la lucha del arte y la belleza contra el oscuro y misterioso Mundo de Tinieblas gótico-punk. Changeling bebe principalmente de la mitología celta, particularmente de las historias de los sidhe y los Tuatha Dé Danann, pero también utiliza otras mitologías y folklores de diversas culturas, incluidas la Mitología de los Nativos Americanos, la mitología griega, la mitología hindú y la mitología china.",
    system : "Sistema Narrativo (d10)",
    img : "./assets/images/changeling.png",
    imgd : "./assets/images/chan0.png"
    },
    {
    name:"call of Cthulhu",
    description: "Juego donde representas un investigador que ha encontrado sucesos paranormales",
    descriptiond: "La llamada de Cthulhu se apoya en los mitos de Cthulhu, el mundo creado por el escritor estadounidense Howard Phillips Lovecraft y un círculo de autores que se intercambiaban relatos entre ellos aproximadamente desde 1920 a 1930 H. P. Lovecraft creó un horror propio, apartado del típico terror gótico del romanticismo. Su mitología incluye gran cantidad de dioses y monstruos venidos de las estrellas para dominar el mundo a través de sus seguidores religiosos, todo ello descrito en relatos opresivos ambientados en los Estados Unidos durante los felices años veinte. Además de las siete ediciones básicas que se han editado hasta ahora de La llamada de Cthulhu, ambientadas en los años 1920, también se han publicado algunas adaptaciones ambientadas en otras épocas: en la época romana y en un futuro próximo (Cthulhu Invictus y Cthulhu Rising, no traducidos aún al castellano), en la Edad Media (Cthulhu Edad Oscura, título original: Cthulhu Dark Ages), en la época victoriana (Luz de gas, título original: Cthulhu by Gaslight) y en la época actual (Cthulhu Actual, título original: Cthulhu Now)",
    system : "BRP",
    img : "./assets/images/CocPortada.jpg",
    imgd : "./assets/images/cocLogo.png"
    },
    {
    name:"dungeons and dragons",
    description: "Se uno de los clasicos aventureros: El Barbaro, El Bardo, El Guerrero, El Paladin, El Mago, El Hechicero, etc.",
    descriptiond: "Juego donde interpretaras a uno Dungeons & Dragons (en español: Dragones y mazmorras o Calabozos y dragones) es un juego de rol de fantasía heroica actualmente publicado por Wizards of the Coast. El juego original fue diseñado en Estados Unidos por Gary Gygax y Dave Arneson y publicado por primera vez en 1974 por la compañía de Gygax, Tactical Studies Rules (TSR). Originalmente derivado de juegos de tablero jugados con lápiz, papel y dados, la primera publicación de Dungeons & Dragons es bien conocida como el principio de los juegos de rol modernos1​ y por consiguiente de la industria de los juegos de rol.de los clasicos aventureros: El Barbaro, El Bardo, El Guerrero, El Paladin, El Mago, El Hechicero, etc.",
    system : "SRD d20",
    img : "./assets/images/DnD5.jpg",
    imgd: "./assets/images/DungeonsNDragonsLogo.png"
    },
    {
    name:"Mage: the ascension v20",
    description: "Juego donde Interpretas a un Despierto, alguien que ahora es capaz de hacer magia",
    descriptiond: "Ocultos a los ojos del mundo, algunos hombres y mujeres han Despertado a una realidad muy diferente de la concebida por el paradigma de las masas humanas, y son capaces de alterar con su voluntad los cimientos de la física, la mente y la magia. Arropados por las sombras, estos individuos se agrupan en sociedades variopintas trazando planes para hacer de la tierra Su mundo. Así encontraremos desde magos de las Tradiciones (Orden de Hermes, Verbena, Eutánatos), hasta Tecnócratas (Iteración X, NOM, Progenitores), pasando por Merodeadores y Nefandos. A todos ellos se les conoce comúnmente como magos. Poseen varias debilidades, pero estas son diferentes a como se las muestra en las novelas y películas. Una estaca en el corazón no los mata, sólo los paraliza. Ocurre igualmente con el agua bendita, cruces u otros símbolos religiosos, sean o no cristianos, salvo que fueran esgrimidos por alguien con auténtica fe en esa creencia. Las demás cosas, como el ajo, no poseen ningún efecto.",
    system : "Sistema Narrativo (d10)",
    img : "./assets/images/magepor.png",
    imgd : "./assets/images/Mage_The_Ascension_logo_M20.png"
    },
    {
    name:"Pathfinder",
    description: "Alterno a DnD. Se uno de estos: El Barbaro, El Bardo, El Guerrero, El Paladin, El Mago, El Hechicero, etc.",
    descriptiond: "Alterno a DnD. Se uno de estos: El Barbaro, El Bardo, El Guerrero, El Paladin, El Mago, El Hechicero, etc. Pathfinder es un juego de rol estadounidense de fantasía heroica publicado por primera vez por la editorial Paizo en agosto de 2009, basado en el sistema d20. Considerado por muchos como la evolución del sistema de juego de Dungeons and Dragons v3.5 (v3.5: «tercera edición revisada»), el juego tiene el aporte de la comunidad de jugadores de rol bajo la licencia Open Game License, lo que hace que sea muy rico en historia y cada campaña de juego única entre los jugadores.",
    system : "SRD d20",
    img : "./assets/images/phfRulebook.jpg",
    imgd : "./assets/images/phfRulebook.jpg"
    },
    {
    name:"Vampire: the masquerade v20",
    description: "Has sido convertido en un miembro mas de la Estirpe, que sera de ti en estas solitarias noches?",
    descriptiond: "Vástago es el nombre que los vampiros se dan a sí mismos, al igual que Cainita, este debido a que se consideran descendientes de Caín. Esta descendencia hace que se forme una distinción en generaciones. La creación de un nuevo vampiro se realiza mediante el acto que el juego denomina “abrazo”, consistente en vaciar de sangre a una persona, y darle luego vitae vampírica aunque sea en pequeña cantidad. La persona se volverá un vástago en cuestión de un par de minutos, aunque el proceso puede volverse realmente lento en vampiros de la 14.ª y 15.ª, llegando a tomar casi todo un día. El nuevo vástago será del mismo clan que su sire, a menos que sea de una generación tan avanzada y casi nula del vitae vampírico original, que se vuelva un Caitiff. También será de una generación superior a su sire. De esta forma un vástago de 10.ª generación tendrá un chiquillo de 11.ª. Todos los vampiros son diferentes entre sí, aunque hay características que son pasadas del sire al Chiquillo en el momento del abrazo, al igual que unos sentidos agudizados y una mayor capacidad física. Estas características provienen del clan del Sire (ver más abajo). Estas se diluyen con el paso de las generaciones hasta el punto de que el chiquillo no es superior a un humano, con las debidas restricciones propias de los vampiros. Este punto suele suceder en la 14° o 15° generación, que normalmente no pueden abrazar a otros humanos; se cree que incluso llegando a soportar la luz del sol. Por otro lado los de menor generación tienen más poder, en especial los de 7° o inferior. La generación de un chiquillo es un paso mayor que la de su sire, aunque existe una forma de mejorarla, la “diablerie”, que consiste en consumir la sangre de otro vástago de una forma total. Usualmente es una forma de castigo supremo que solo puede ser impuesto a partir de una orden de Caza de sangre liberada por el príncipe de una ciudad, y solo podrá ser realizada por el Sire del chiquillo. Sin embargo, en la confusión, muchos jóvenes vástagos suelen aprovechar para cometer Diablerie. Si el criminal era especialmente detestable, el príncipe suele mirar hacia otro lado. Para lograr la diablerie, un vampiro debe beber hasta la última gota de la sangre de otro vampiro, y luego seguir sorbiendo para chupar el alma de la víctima. El esfuerzo de este acto es monumental, ya que el espíritu de los vástagos es tenaz y se aferra como puede a la No-Vida, esperando poder regenerar su cuerpo y despertar una vez más. Robando la vida a un vampiro más cercano a Caín (de una generación inferior a la propia) el vástago puede enriquecer de forma permanente su propia sangre. Otra característica que todos comparten es su perdición, pues todos son afectados por la “Bestia Interior” o sea la parte animal del vástago, que acosa continuamente a los vampiros, y los domina en momentos de hambre, ira o miedo. Es común que los vampiros que pierden su humanidad, pero tampoco se adhieren a ningún otro tipo de moral, como lo hacen muchos vampiros, caigan completamente bajo el control de la Bestia. Alguien en esta situación se comporta como un animal, solo se preocupa de comer, dormir y cuidar su territorio. Algunos vampiros intentan controlar la Bestia, negando su existencia como simples depredadores, manteniendo su humanidad, aunque algunos la aceptan y adoptan como una forma de vida, perdiendo su capacidad de mezclarse entre los humanos y mantener su conciencia. Los vampiros más poderosos usan ghouls, que son humanos a los que se les ha dado vitae sin vaciarle la sangre, para ocuparse de las cosas que no quieren, o no pueden hacer ellos mismos, como por ejemplo la gestión de sus asuntos en el mundo mortal durante las horas de luz. Gracias a la sangre que recibe el ghoul tiene una fuerza y resistencia superior y no envejecerá mientras su cuerpo contenga vitae. A medida que continúe bebiendo sangre de su maestro (llamado Domitor) se volverá más leal a él, llegando a adorarle y a amarlo. Si el ghoul no recibe sangre periódicamente, perderá la fuerza que la vitae le dio, y seguirá envejeciendo, lo cual pasa especialmente rápido en ghouls que han excedido el límite de una vida humana común. Además la lealtad del ghoul a su domitor se debilita sin la vitae, y es probable que se deforme en sentimientos negativos, aunque no desaparecerá a menos que el domitor muera o lleve grandes periodos de tiempo sin ver a su ghoul. Dependiendo del ghoul, este tiempo puede variar entre varios meses y más de un año. Poseen varias debilidades, pero estas son diferentes a como se las muestra en las novelas y películas. Una estaca en el corazón no los mata, sólo los paraliza. Ocurre igualmente con el agua bendita, cruces u otros símbolos religiosos, sean o no cristianos, salvo que fueran esgrimidos por alguien con auténtica fe en esa creencia. Las demás cosas, como el ajo, no poseen ningún efecto.",
    system : "Sistema Narrativo (d10)",
    img : "./assets/images/vampire.png",
    imgd : "./assets/images/VtM0.png"
    }];

  getData(){
    return this.listGames;
  }

  getGame(id:any){
    return this.listGames[id];
  }

}
