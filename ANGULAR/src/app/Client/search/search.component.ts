import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Empleado } from 'src/app/Models/Empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  empleados:Empleado = new Empleado();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {

   let cedula = parseInt(localStorage.getItem("cedula"));

   this.service.getEmpleadoId(cedula).subscribe(data=>{ this.empleados = data});
  }


  Editar(empleado:Empleado):void{

    localStorage.setItem("cedula", empleado.cedula.toString());

    this.router.navigate(["RouteEdit"]);

  }

  Eliminar(empleado:Empleado):void{

    localStorage.setItem("cedula", empleado.cedula.toString());

    this.router.navigate(["RouteDelete"]);

  }

}
