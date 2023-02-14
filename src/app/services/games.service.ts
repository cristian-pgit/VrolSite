import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  private listGames:any = [
    {
    name:"Changeling: The Dreaming v20",
    description: "Juego donde Interpretas un hada que se oculta tras una identidad mortal",
    system : "Sistema Narrativo (d10)",
    img : "./assets/images/changeling.png"
    },
    {
    name:"Call of Cthulhu",
    description: "Juego donde representas un investigador que ha encontrado sucesos paranormales",
    system : "BRP",
    img : "./assets/images/CocPortada.jpg"
    },
    {
    name:"Dungeons and Dragons",
    description: "Juego donde interpretaras a uno de los clasicos aventureros: El Barbaro, El Bardo, El Guerrero, El Paladin, El Mago, El Hechicero, etc.",
    system : "SRD d20",
    img : "./assets/images/DnD5.jpg"
    },
    {
    name:"Mage: The Ascension v20",
    description: "Juego donde Interpretas a un Despierto, alguien que ahora es capaz de hacer magia",
    system : "Sistema Narrativo (d10)",
    img : "./assets/images/magepor.png"
    },
    {
      name:"Pathfinder",
      description: "Alterno a DnD. Se uno de estos: El Barbaro, El Bardo, El Guerrero, El Paladin, El Mago, El Hechicero, etc.",
      system : "SRD d20",
      img : "./assets/images/phfRulebook.jpg"
    },
    {
    name:"Vampire: The Masquerade v20",
    description: "Has sido convertido en un miembro mas de la Estirpe, que sera de ti en estas solitarias noches?",
    platform : "Sistema Narrativo (d10)",
    img : "./assets/images/vampire.png"
    }];

  getData(){
    return this.listGames;
  }

  getGame(){
    
  }

}
