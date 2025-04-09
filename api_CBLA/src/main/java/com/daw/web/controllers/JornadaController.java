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

import com.daw.persistence.entities.Jornada;
import com.daw.services.JornadaService;



@RestController
@RequestMapping("/jornadas")
public class JornadaController {
	
	@Autowired
	private JornadaService jornadaService;
	
	@GetMapping
	public ResponseEntity<List<Jornada>> list(){
		return ResponseEntity.ok(this.jornadaService.findAll());
	}
	
	@GetMapping("/{idJornada}")
	public ResponseEntity<Jornada> findById(@PathVariable Integer idJornada) {
		Optional<Jornada> jornada = this.jornadaService.findById(idJornada);
		if(jornada.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(jornada.get());
	}
	
	@PostMapping
	public ResponseEntity<Jornada> create(@RequestBody Jornada jornada){
		return new ResponseEntity<Jornada>(this.jornadaService.create(jornada), HttpStatus.CREATED);
	}
	
	@PutMapping("/{idJornada}")
	public ResponseEntity<Jornada> update(@PathVariable Integer idJornada, @RequestBody Jornada jornada){
		if(idJornada != jornada.getId()) {
			return ResponseEntity.badRequest().build();
		}
		if(!this.jornadaService.existsJornada(idJornada)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(this.jornadaService.update(jornada));
	}
	
	@DeleteMapping("/{idJornada}")
	public ResponseEntity<Jornada> delete(@PathVariable Integer idJornada){
		if(this.jornadaService.delete(idJornada)) {
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}
		
}
