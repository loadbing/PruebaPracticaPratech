import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  empleado:Empleado = new Empleado();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.DetalleEditar();
  }

  DetalleEditar(){
    let id = localStorage.getItem("cedula");
    this.service.getEmpleadoId(+id).subscribe(data=>{this.empleado=data });
  }

  onSubmit(empleado:Empleado){
    this.service.editarEmpleado(empleado).subscribe(data=>{
      this.empleado=data;
      alert("Se ha actualizado");
      this.router.navigate(["RouteList"])
    });
  }

}
