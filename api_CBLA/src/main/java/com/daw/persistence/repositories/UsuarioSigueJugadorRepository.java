package com.daw.persistence.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.ListCrudRepository;

import com.daw.persistence.entities.UsuarioSigueJugador;

public interface UsuarioSigueJugadorRepository extends ListCrudRepository<UsuarioSigueJugador, Integer> {

	List<UsuarioSigueJugador> findByUsuarioId(Integer idUsuario);

	Optional<UsuarioSigueJugador> findByUsuarioIdAndJugadorId(Integer idUsuario, Integer idJugador);

}
