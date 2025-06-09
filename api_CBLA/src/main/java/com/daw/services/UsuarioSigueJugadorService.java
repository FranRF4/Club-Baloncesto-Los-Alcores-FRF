package com.daw.services;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.persistence.entities.Jugador;
import com.daw.persistence.entities.Usuario;
import com.daw.persistence.entities.UsuarioSigueJugador;
import com.daw.persistence.repositories.JugadorRepository;
import com.daw.persistence.repositories.UsuarioRepository;
import com.daw.persistence.repositories.UsuarioSigueJugadorRepository;

import jakarta.transaction.Transactional;


@Service
public class UsuarioSigueJugadorService{
	
	@Autowired
	private UsuarioSigueJugadorRepository usuarioSigueJugadorRepository;	

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private JugadorRepository jugadorRepository;

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

	public List<Jugador> obtenerJugadoresQueSigueUsuario(Integer idUsuario) {
        List<UsuarioSigueJugador> relaciones = usuarioSigueJugadorRepository.findByUsuarioId(idUsuario);
        List<Jugador> jugadores = new ArrayList<>();
    for (UsuarioSigueJugador relacion : relaciones) {
        jugadores.add(relacion.getJugador());
    }
    
    return jugadores;
    }


	@Transactional
    public void seguirJugador(Integer idUsuario, Integer idJugador) {
        // Validar existencia usuario y jugador
        Usuario usuario = usuarioRepository.findById(idUsuario)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Jugador jugador = jugadorRepository.findById(idJugador)
            .orElseThrow(() -> new RuntimeException("Jugador no encontrado"));

        // Verificar si ya sigue al jugador
        boolean yaSigue = usuarioSigueJugadorRepository.findByUsuarioIdAndJugadorId(idUsuario, idJugador).isPresent();
        if (yaSigue) {
            throw new RuntimeException("Ya sigue a este jugador");
        }

        // Crear y guardar la relación
        UsuarioSigueJugador relacion = new UsuarioSigueJugador(usuario, jugador);
        usuarioSigueJugadorRepository.save(relacion);
    }
	
}
