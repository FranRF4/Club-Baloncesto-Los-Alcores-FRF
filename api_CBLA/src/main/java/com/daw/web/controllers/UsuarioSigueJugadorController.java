package com.daw.web.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daw.persistence.entities.Jugador;
import com.daw.persistence.entities.UsuarioSigueJugador;
import com.daw.services.UsuarioSigueJugadorService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/usuarioSigueJugadores")
public class UsuarioSigueJugadorController {
	
	@Autowired
	private UsuarioSigueJugadorService usuarioSigueJugadorService;
	
	@GetMapping
	public ResponseEntity<List<UsuarioSigueJugador>> list(){
		return ResponseEntity.ok(this.usuarioSigueJugadorService.findAll());
	}
	
	@GetMapping("/{idUsuarioSigue}")
	public ResponseEntity<UsuarioSigueJugador> findById(@PathVariable Integer idUsuarioSigue) {
		Optional<UsuarioSigueJugador> usuarioSigueJugador = this.usuarioSigueJugadorService.findById(idUsuarioSigue);
		if(usuarioSigueJugador.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(usuarioSigueJugador.get());
	}
	
	@PostMapping
	public ResponseEntity<UsuarioSigueJugador> create(@RequestBody UsuarioSigueJugador usuarioSigueJugador){
		return new ResponseEntity<UsuarioSigueJugador>(this.usuarioSigueJugadorService.create(usuarioSigueJugador), HttpStatus.CREATED);
	}
	
	@PutMapping("/{idUsuarioSigue}")
	public ResponseEntity<UsuarioSigueJugador> update(@PathVariable Integer idUsuarioSigue, @RequestBody UsuarioSigueJugador usuarioSigueJugador){
		if(idUsuarioSigue != usuarioSigueJugador.getId()) {
			return ResponseEntity.badRequest().build();
		}
		if(!this.usuarioSigueJugadorService.existsUsuarioSigueJugador(idUsuarioSigue)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(this.usuarioSigueJugadorService.save(usuarioSigueJugador));
	}
	
	@DeleteMapping("/{idUsuarioSigue}")
	public ResponseEntity<UsuarioSigueJugador> delete(@PathVariable Integer idUsuarioSigue){
		if(this.usuarioSigueJugadorService.delete(idUsuarioSigue)) {
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}
		
	@GetMapping("/{idUsuario}/jugadores")
	public List<Jugador> getJugadoresQueSigue(@PathVariable Integer idUsuario) {
        return usuarioSigueJugadorService.obtenerJugadoresQueSigueUsuario(idUsuario);
    }

	@PostMapping("/{idUsuario}/seguir/{idJugador}")
    public ResponseEntity<String> seguirJugador( @PathVariable Integer idUsuario, @PathVariable Integer idJugador) {
        usuarioSigueJugadorService.seguirJugador(idUsuario, idJugador);
        return ResponseEntity.ok("Jugador seguido correctamente");
    }

	@GetMapping("/{idUsuario}/sigue/{idJugador}")
    public ResponseEntity<Boolean> comprobarSiSigue(@PathVariable Integer idUsuario, @PathVariable Integer idJugador) {
        boolean sigue = usuarioSigueJugadorService.comprobarSiSigue(idUsuario, idJugador);
        return ResponseEntity.ok(sigue);
    }

    @DeleteMapping("/{idUsuario}/seguir/{idJugador}")
    public ResponseEntity<?> dejarDeSeguir(@PathVariable Integer idUsuario, @PathVariable Integer idJugador) {
        usuarioSigueJugadorService.dejarDeSeguir(idUsuario, idJugador);
        return ResponseEntity.ok().build();
    }
}
