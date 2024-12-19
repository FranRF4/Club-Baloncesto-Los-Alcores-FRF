package com.daw.persistence.repositories;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

import com.daw.persistence.entities.Partido;

public interface PartidoRepository extends ListCrudRepository<Partido, Integer>{
	
	List<Partido> findByDisponibleTrueOrderByPrecioAsc();


}
