import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() dataInput:any = {name:"", description:"", system:"", img:"" };
  @Input() indexInput: number = 0;
  @Output() selectGame: EventEmitter<any>

  constructor(){
    this.selectGame = new EventEmitter();
  }
  ngOnInit(): void {
    
  }

  buyGame(){
    console.log("fx BuyGame")
    this.selectGame.emit(this.indexInput);
  }

  

}
