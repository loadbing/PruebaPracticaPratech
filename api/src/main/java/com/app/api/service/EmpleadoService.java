package com.app.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.api.model.Empleado;
import com.app.api.repository.EmpleadoRepository;

@Service
public class EmpleadoService {

	@Autowired
    EmpleadoRepository EmpleadoRepo;
	
	
	public List<Empleado> Listar() {
        return EmpleadoRepo.findAll();
    }
	
	public Empleado ListarPorId(Long cedula) {
        return EmpleadoRepo.findById(cedula).orElse(null);
    }
		
	public Empleado Agregar(Empleado E) {
        return EmpleadoRepo.save(E);
    }
	
	public Empleado Editar(Empleado E) {
        return EmpleadoRepo.save(E);
    }
	
	public Empleado Eliminar(Long cedula) {
         Empleado E = EmpleadoRepo.findById(cedula).orElse(null);
         if(E!=null) {
        	 EmpleadoRepo.delete(E);
         }
         return E;
    }
	
	
}
