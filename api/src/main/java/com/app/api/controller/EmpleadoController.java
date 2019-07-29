package com.app.api.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.api.service.EmpleadoService;
import com.app.api.model.Empleado;
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600 )
@RestController
@RequestMapping("/Api")
public class EmpleadoController {

	@Autowired
    private EmpleadoService empleadoService;
	
	@RequestMapping(value = "/Listar")
    public List<Empleado> listarEmpleados() {
        return empleadoService.Listar();
    }
	
	
	@RequestMapping(value = "/ListarPorId/{cedula}")
    public Empleado listarEmpleadoId(@PathVariable(value ="cedula") Long cedula) {
        return empleadoService.ListarPorId(cedula);
    }
	
	@RequestMapping(value = "/Validar/{cedula}",params = { "password" },method = RequestMethod.GET)
	@ResponseBody
    public List<String> ValidarEmpleado(@PathVariable(value ="cedula") Long cedula,@RequestParam("password") String password) {
		
		Empleado E = empleadoService.ListarPorId(cedula);
		
		List<String> passwordUser = new ArrayList<String>();
		passwordUser.add(E.getPassword());
		passwordUser.add(E.getNombres());
		
		return passwordUser;
    }
	
	@RequestMapping(value = "/Agregar", method = RequestMethod.POST)
    void agregarEmpleado(@Valid @RequestBody Empleado E) {
        empleadoService.Agregar(E);
    }
	
	@RequestMapping(value = "/Editar/{cedula}", method = RequestMethod.PUT)
    void editarEmpleado(@Valid @RequestBody Empleado E,@PathVariable(value = "cedula") Long cedula) {
		E.setCedula(cedula);
        empleadoService.Editar(E);
    }
	
	@RequestMapping(value = "/Eliminar/{cedula}", method = RequestMethod.DELETE)
    void eliminarEmpleado(@Valid @RequestBody @PathVariable(value = "cedula") Long cedula) {
        empleadoService.Eliminar(cedula);
    }
	
	
}
