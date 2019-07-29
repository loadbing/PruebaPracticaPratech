import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Models/Empleado';
import { Router } from '@angular/router';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  empleados:Empleado[];
  title:String;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    let NombreUsuario =  sessionStorage.getItem("Nombre");
    if(NombreUsuario==""){
      this.router.navigate(["RouteMenu"]);
    }else{
      this.title = ""+ NombreUsuario;
      this.service.getEmpleado().subscribe(data=>{ this.empleados = data});
    }
  }

  Editar(empleado:Empleado):void{

    localStorage.setItem("cedula", empleado.cedula.toString());

    this.router.navigate(["RouteEdit"]);

  }

  Eliminar(empleado:Empleado):void{

    localStorage.setItem("cedula", empleado.cedula.toString());

    this.router.navigate(["RouteDelete"]);

  }

  Buscar(CedBuscar:string):void{

    localStorage.setItem("cedula", CedBuscar);
    this.router.navigate(["RouteSearch"]);
    
  }


}
