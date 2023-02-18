import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-detailgame',
  templateUrl: './detailgame.component.html',
  styleUrls: ['./detailgame.component.css']
})
export class DetailgameComponent {

  game:any;

  constructor(private activatedRouter: ActivatedRoute, private service: GamesService){

    this.activatedRouter.params.subscribe( data => {
       
      this.game = this.service.getGame(data['id']);

    })
  }

}
