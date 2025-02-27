package com.daw.persistence.repositories;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

import com.daw.persistence.entities.Jugador;

public interface JugadorRepository extends ListCrudRepository<Jugador, Integer> {

	List<Jugador> findByDisponibleTrueAndNombreStartingWith(String nombre);
}
