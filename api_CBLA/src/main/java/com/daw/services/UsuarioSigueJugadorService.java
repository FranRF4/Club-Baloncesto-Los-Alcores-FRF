package com.daw.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.persistence.entities.UsuarioSigueJugador;
import com.daw.persistence.repositories.UsuarioSigueJugadorRepository;


@Service
public class UsuarioSigueJugadorService{
	
	@Autowired
	private UsuarioSigueJugadorRepository usuarioSigueJugadorRepository;	

	//CRUDs simples
	public List<UsuarioSigueJugador> findAll(){
		return this.usuarioSigueJugadorRepository.findAll();
	}
	
	public boolean existsUsuarioSigueJugador(Integer idUsuarioSigue){
		return this.usuarioSigueJugadorRepository.existsById(idUsuarioSigue);
	}
	
	public Optional<UsuarioSigueJugador> findById(Integer idUsuarioSigue){
		return this.usuarioSigueJugadorRepository.findById(idUsuarioSigue);
	}

	public UsuarioSigueJugador create(UsuarioSigueJugador usuarioSigueJugador){		
		return this.usuarioSigueJugadorRepository.save(usuarioSigueJugador);
	}

	public UsuarioSigueJugador save(UsuarioSigueJugador usuarioSigueJugador){
		return this.usuarioSigueJugadorRepository.save(usuarioSigueJugador);
	}
	
	public boolean delete(Integer idUsuarioSigue) {		
		boolean result = false;
		
		if(this.usuarioSigueJugadorRepository.existsById(idUsuarioSigue)) {
			this.usuarioSigueJugadorRepository.deleteById(idUsuarioSigue);
			result = true;
		}
		
		return result;
	}
	
}
