package com.app.api.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tb_empleados")
public class Empleado {


	@Id
    @Column(name = "cedula")
    Long cedula;

    @NotNull
    @Column(name = "nombres")
    String nombres;
 
    @NotNull
    @Column(name = "apellidos")
    String apellidos;
	
    @NotNull
    @Column(name = "cargo")
    String cargo;
    
    @NotNull
    @Column(name = "password")
    String password;


	public Long getCedula() {
		return cedula;
	}

	public void setCedula(Long cedula) {
		this.cedula = cedula;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	

	
	
}
