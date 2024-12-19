package com.daw.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.persistence.entities.Temporada;
import com.daw.persistence.repositories.TemporadaRepository;


@Service
public class TemporadaService {
	
	@Autowired
	private TemporadaRepository temporadaRepository;	

	//CRUDs simples
	public List<Temporada> findAll(){
		return this.temporadaRepository.findAll();
	}
	
	public boolean existsTemorada(Integer idTemporada){
		return this.temporadaRepository.existsById(idTemporada);
	}
	
	public Optional<Temporada> findById(Integer idTemporada){
		return this.temporadaRepository.findById(idTemporada);
	}

	public Temporada create(Temporada temporada){		
		return this.temporadaRepository.save(temporada);
	}

	public Temporada save(Temporada temporada){
		return this.temporadaRepository.save(temporada);
	}
	
	public boolean delete(Integer idTemporada) {		
		boolean result = false;
		
		if(this.temporadaRepository.existsById(idTemporada)) {
			this.temporadaRepository.deleteById(idTemporada);
			result = true;
		}
		
		return result;
	}
	
}
