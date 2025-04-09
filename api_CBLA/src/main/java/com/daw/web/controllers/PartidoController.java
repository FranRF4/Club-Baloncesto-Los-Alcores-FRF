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


import com.daw.persistence.entities.Partido;
import com.daw.services.PartidoService;



@RestController
@RequestMapping("/partidos")
public class PartidoController {
	
	@Autowired
	private PartidoService partidoService;
	
	@GetMapping
	public ResponseEntity<List<Partido>> list(){
		return ResponseEntity.ok(this.partidoService.findAll());
	}
	
	@GetMapping("/{idPartido}")
	public ResponseEntity<Partido> findById(@PathVariable Integer idPartido) {
		Optional<Partido> partido = this.partidoService.findById(idPartido);
		if(partido.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(partido.get());
	}
	
	@PostMapping
	public ResponseEntity<Partido> create(@RequestBody Partido partido){
		return new ResponseEntity<Partido>(this.partidoService.create(partido), HttpStatus.CREATED);
	}
	
	@PutMapping("/{idPartido}")
	public ResponseEntity<Partido> update(@PathVariable Integer idPartido, @RequestBody Partido partido){
		if(idPartido != partido.getId()) {
			return ResponseEntity.badRequest().build();
		}
		if(!this.partidoService.existsPartido(idPartido)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(this.partidoService.save(partido));
	}
	
	@DeleteMapping("/{idPartido}")
	public ResponseEntity<Partido> delete(@PathVariable Integer idPartido){
		if(this.partidoService.delete(idPartido)) {
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}
		
}
