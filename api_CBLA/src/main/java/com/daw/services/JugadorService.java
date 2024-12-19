package com.daw.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.persistence.entities.Jugador;
import com.daw.persistence.repositories.JugadorRepository;

@Service
public class JugadorService {
	
	@Autowired
	private JugadorRepository jugadorRepository;

	public List<Jugador> findAll() {
		return this.jugadorRepository.findAll();
	}
	
	public boolean existsJugador(Integer idJugador){
		return this.jugadorRepository.existsById(idJugador);
	}
	
	public Optional<Jugador> findById(int idPizza) {
		return this.jugadorRepository.findById(idPizza);
	}
	
	public Jugador create(Jugador jugador) {
		return this.jugadorRepository.save(jugador);
	}
	
	public Jugador save(Jugador jugador) {
		return this.jugadorRepository.save(jugador);
	}
	
	public boolean delete(int idJugador) {
		boolean result = false;
		
		if(this.jugadorRepository.existsById(idJugador)) {
			this.jugadorRepository.deleteById(idJugador);
			result = true;
		}
		
		return result;
	}
	
	public List<Jugador> getByNombre(String nombre) {
		return this.jugadorRepository.findByDisponibleTrueAndNombreStartingWith(nombre);
	}
}
