package com.daw.persistence.repositories;

import org.springframework.data.repository.ListCrudRepository;

import com.daw.persistence.entities.Equipo;

public interface EquipoRepository extends ListCrudRepository<Equipo, Integer> {
	

}
