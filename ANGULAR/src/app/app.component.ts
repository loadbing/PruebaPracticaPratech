import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (private router:Router){

  }

  ngOnInit() {
    sessionStorage.setItem("Nombre","");
  }

  
  List(){
    this.router.navigate(['RouteList']);
  }

  Add(){
    this.router.navigate(['RouteAdd']);
  }

  Login(){
    this.router.navigate(['RouteMenu']);
  }
  
}

