import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

empleado:Empleado;


  constructor(private router:Router, private service:ServiceService) { 
    this.empleado = new Empleado();
  }

  ngOnInit() {
    let NombreUsuario =  sessionStorage.getItem("Nombre");
    if(NombreUsuario==""){
      this.router.navigate(["RouteMenu"]);
    }
  }

  onSubmit() {
    this.service.agregarEmpleado(this.empleado).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(["RouteList"]);
  }


}
