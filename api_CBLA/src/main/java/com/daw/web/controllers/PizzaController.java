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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.daw.persistence.entities.Partido;
import com.daw.services.JugadorService;

@RestController
@RequestMapping("/pizzas")
public class PizzaController {

	@Autowired
	private JugadorService pizzaService;
	
	@GetMapping
	public ResponseEntity<List<Partido>> list() {
		return ResponseEntity.ok(this.pizzaService.findAll());
	}
	
	@GetMapping("/{idPizza}")
	public ResponseEntity<Partido> findById(@RequestParam int idPizza) {
		Optional<Partido> pizza = this.pizzaService.findById(idPizza);
		if(pizza.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(pizza.get());
	}
	
	@PostMapping
	public ResponseEntity<Partido> create(@RequestBody Partido pizza) {
		return new ResponseEntity<Partido>(this.pizzaService.create(pizza), HttpStatus.CREATED);
	}
	
	@PutMapping("/{idPizza}")
	public ResponseEntity<Partido> update(@PathVariable int idPizza, @RequestBody Partido pizza) {
		if(idPizza != pizza.getId()) {
			return ResponseEntity.badRequest().build();
		}
		else if(!this.pizzaService.existsPizza(idPizza)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(this.pizzaService.save(pizza));
	}
	
	@DeleteMapping("/{idPizza}")
	public ResponseEntity<Partido> delete(@PathVariable int idPizza) {
		if(this.pizzaService.delete(idPizza)) {
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/carta")
	public ResponseEntity<List<Partido>> carta() {
		return ResponseEntity.ok(this.pizzaService.getCarta());
	}
	
	@GetMapping("/nombre")
	public ResponseEntity<List<Partido>> findByNombre(@RequestParam String nombre) {
		return ResponseEntity.ok(this.pizzaService.getByNombre(nombre));
	}
	
	@GetMapping("/conIngrediente")
	public ResponseEntity<List<Partido>> findIngrediente(@RequestParam String ingrediente) {
		return ResponseEntity.ok(this.pizzaService.getIngrediente(ingrediente));
	}

	@GetMapping("/sinIngrediente")
	public ResponseEntity<List<Partido>> findSinIngrediente(@RequestParam String ingrediente) {
		return ResponseEntity.ok(this.pizzaService.getSinIngrediente(ingrediente));
	}
	
	@PutMapping("/{idPizza}/precio")
	public ResponseEntity<Partido> actualizarPrecio(@PathVariable int idPizza, @RequestParam double nuevoPrecio){
		if(this.pizzaService.existsPizza(idPizza)) {
			return ResponseEntity.ok(this.pizzaService.actualizarPrecio(idPizza, nuevoPrecio));
		}
		
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/{idPizza}/disponible")
	public ResponseEntity<Partido> marcarDesmarcarDisponible(@PathVariable int idPizza){
		if(this.pizzaService.existsPizza(idPizza)) {
			return ResponseEntity.ok(this.pizzaService.marcarDesmarcarDisponible(idPizza));
		}
		
		return ResponseEntity.notFound().build();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
