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


import com.daw.persistence.entities.Temporada;
import com.daw.services.TemporadaService;



@RestController
@RequestMapping("/temporada")
public class TemporadaController {
	
	@Autowired
	private TemporadaService temporadaService;
	
	@GetMapping
	public ResponseEntity<List<Temporada>> list(){
		return ResponseEntity.ok(this.temporadaService.findAll());
	}
	
	@GetMapping("/{idTemporada}")
	public ResponseEntity<Temporada> findById(@PathVariable Integer idTemporada) {
		Optional<Temporada> temporada = this.temporadaService.findById(idTemporada);
		if(temporada.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(temporada.get());
	}
	
	@PostMapping
	public ResponseEntity<Temporada> create(@RequestBody Temporada temporada){
		return new ResponseEntity<Temporada>(this.temporadaService.create(temporada), HttpStatus.CREATED);
	}
	
	@PutMapping("/{idTemporada}")
	public ResponseEntity<Temporada> update(@PathVariable Integer idTemporada, @RequestBody Temporada temporada){
		if(idTemporada != temporada.getId()) {
			return ResponseEntity.badRequest().build();
		}
		if(!this.temporadaService.existsTemorada(idTemporada)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(this.temporadaService.save(temporada));
	}
	
	@DeleteMapping("/{idTemporada}")
	public ResponseEntity<Temporada> delete(@PathVariable Integer idTemporada){
		if(this.temporadaService.delete(idTemporada)) {
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}
		
}
