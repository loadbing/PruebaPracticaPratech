import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  empleado:Empleado = new Empleado();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    let id = localStorage.getItem("cedula");
    this.service.getEmpleadoId(+id).subscribe(data=>{this.empleado=data });
  }


  Eliminar(empleado:Empleado){
    this.service.eliminarEmpleado(empleado).subscribe(data=>{
      this.empleado=this.empleado;
      alert("Se ha eliminado");
      this.router.navigate(["RouteList"])
    });
  }
  
  Cancelar():void{
    
      this.router.navigate(["RouteList"])
    
  }
 
}
