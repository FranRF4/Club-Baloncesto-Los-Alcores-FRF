package com.daw.persistence.repositories;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

import com.daw.persistence.entities.Equipo;

public interface EquipoRepository extends ListCrudRepository<Equipo, Integer> {
	
	List<Equipo> findByTelefonoContaining(String telefono);	

}
