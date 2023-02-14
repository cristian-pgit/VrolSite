import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  name= 'Cristian'

  ngOnInit(){
    console.log("Home Component", this.name);  
  }

}
