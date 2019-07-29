import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  passwordUser:String[];
  

  constructor (private router:Router,private service:ServiceService){

  }


  ngOnInit() {
    let NombreUsuario =  sessionStorage.getItem("Nombre");
    if(NombreUsuario!=""){
      this.router.navigate(["RouteList"]);
    }
  }


  login(cedula:number,paswword:string){
    
    
    this.service.validarEmpleado(cedula,paswword).subscribe(data=>{
      this.passwordUser=data;
      if(this.passwordUser[0]==paswword){
        sessionStorage.setItem("Nombre",this.passwordUser[1].toString());
        alert("Es correcto");
        this.router.navigate(["RouteList"]);
      }else{
        alert("Es incorrecto");
      }
    });
  }
}
