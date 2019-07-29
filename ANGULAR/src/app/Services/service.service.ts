import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../Models/Empleado';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
  
  }
  Url = "http://localhost:8080/Api";

  getEmpleado(){
    return this.http.get<Empleado[]>(this.Url+"/Listar");
  }


  agregarEmpleado(empleado:Empleado){
    return this.http.post<Empleado>(this.Url+"/Agregar",empleado);
  }

  getEmpleadoId(cedula:number){
    return this.http.get<Empleado>(this.Url+"/ListarPorId/"+cedula);
  }

  validarEmpleado(cedula:number,password:string){
    return this.http.get<String[]>(this.Url+"/Validar/"+cedula+"/?password="+password);
  }

  editarEmpleado(empleado:Empleado){
    return this.http.put<Empleado>(this.Url+"/Editar/"+empleado.cedula,empleado);
  }

  eliminarEmpleado(empleado:Empleado){
    return this.http.delete<Empleado>(this.Url+"/Eliminar/"+empleado.cedula);
  }

}
