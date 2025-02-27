package com.daw.web.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daw.persistence.entities.Jugador;
import com.daw.services.JugadorService;




@RestController
@RequestMapping("/jugador")
public class JugadorController {
	
	@Autowired
	private JugadorService jugadorService;
	
	@GetMapping
	public ResponseEntity<List<Jugador>> list(){
		return ResponseEntity.ok(this.jugadorService.findAll());
	}
	
	@GetMapping("/{idJugador}")
	public ResponseEntity<Jugador> findById(@PathVariable Integer idJugador) {
		Optional<Jugador> jugador = this.jugadorService.findById(idJugador);
		if(jugador.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(jugador.get());
	}
	
	@PostMapping
	public ResponseEntity<Jugador> create(@RequestBody Jugador jugador){
		return new ResponseEntity<Jugador>(this.jugadorService.create(jugador), HttpStatus.CREATED);
	}
	
	@PutMapping("/{idJugador}")
	public ResponseEntity<Jugador> update(@PathVariable Integer idJugador, @RequestBody Jugador jugador){
		if(idJugador != jugador.getId()) {
			return ResponseEntity.badRequest().build();
		}
		if(!this.jugadorService.existsJugador(idJugador)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(this.jugadorService.save(jugador));
	}
	
	@DeleteMapping("/{idJugador}")
	public ResponseEntity<Jugador> delete(@PathVariable Integer idJugador){
		if(this.jugadorService.delete(idJugador)) {
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}
		
}
