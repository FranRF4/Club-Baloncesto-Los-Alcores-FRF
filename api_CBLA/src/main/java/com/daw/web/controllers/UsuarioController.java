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


import com.daw.persistence.entities.Usuario;
import com.daw.services.UsuarioService;



@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> list(){
		return ResponseEntity.ok(this.usuarioService.findAll());
	}
	
	@GetMapping("/{idTemporada}")
	public ResponseEntity<Usuario> findById(@PathVariable Integer idUsuario) {
		Optional<Usuario> usuario = this.usuarioService.findById(idUsuario);
		if(usuario.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(usuario.get());
	}
	
	@PostMapping
	public ResponseEntity<Usuario> create(@RequestBody Usuario usuario){
		return new ResponseEntity<Usuario>(this.usuarioService.create(usuario), HttpStatus.CREATED);
	}
	
	@PutMapping("/{idTemporada}")
	public ResponseEntity<Usuario> update(@PathVariable Integer idUsuario, @RequestBody Usuario usuario){
		if(idUsuario != usuario.getId()) {
			return ResponseEntity.badRequest().build();
		}
		if(!this.usuarioService.existsTemorada(idUsuario)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(this.usuarioService.save(usuario));
	}
	
	@DeleteMapping("/{idTemporada}")
	public ResponseEntity<Usuario> delete(@PathVariable Integer idUsuario){
		if(this.usuarioService.delete(idUsuario)) {
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}
		
}
