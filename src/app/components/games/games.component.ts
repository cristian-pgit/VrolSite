import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

export interface Game {
  name : String,
  description : String,
  system : String,
  img : string
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  items : Game [] = [];
  
  constructor(private myService:GamesService){}
 
 
 
  ngOnInit(): void {
    console.log("Inicio de mi Componente Games");
    this.getGames();
  }

  getGames(){
    console.log("GetGames()");
    this.items = this.myService.getData();
    console.log(this.items);
  }

  addShop(element:any){
    console.log("se agrego"+element);
  }

} 
