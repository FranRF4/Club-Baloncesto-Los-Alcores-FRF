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

import com.daw.persistence.entities.Equipo;
import com.daw.services.EquipoService;


@RestController
@RequestMapping("/equipo")
public class EquipoController {

	@Autowired
	private EquipoService equipoService;
	
	@GetMapping
	public ResponseEntity<List<Equipo>> list(){
		return ResponseEntity.ok(this.equipoService.findAll());
	}
	
	@GetMapping("/{idEquipo}")
	public ResponseEntity<Equipo> findById(@PathVariable Integer idEquipo) {
		Optional<Equipo> equipo = this.equipoService.findById(idEquipo);
		if(equipo.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(equipo.get());
	}
	
	@PostMapping
	public ResponseEntity<Equipo> create(@RequestBody Equipo equipo){
		return new ResponseEntity<Equipo>(this.equipoService.create(equipo), HttpStatus.CREATED);
	}
	
	@PutMapping("/{idEquipo}")
	public ResponseEntity<Equipo> update(@PathVariable int idEquipo, @RequestBody Equipo equipo){
		if(idEquipo != equipo.getId()) {
			return ResponseEntity.badRequest().build();
		}
		else if(!this.equipoService.existsEquipo(idEquipo)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(this.equipoService.save(equipo));
	}
	
	@DeleteMapping("/{idEquipo}")
	public ResponseEntity<Equipo> delete(@PathVariable int idEquipo){
		if(this.equipoService.delete(idEquipo)) {
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}
	
}
