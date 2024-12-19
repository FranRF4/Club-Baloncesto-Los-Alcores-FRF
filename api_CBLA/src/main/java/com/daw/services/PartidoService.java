package com.daw.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.persistence.entities.Partido;
import com.daw.persistence.repositories.PartidoRepository;


@Service
public class PartidoService {
	
	@Autowired
	private PartidoRepository partidoRepository;	

	//CRUDs simples
	public List<Partido> findAll(){
		return this.partidoRepository.findAll();
	}
	
	public boolean existsPartido(Integer idPartido){
		return this.partidoRepository.existsById(idPartido);
	}
	
	public Optional<Partido> findById(Integer idPartido){
		return this.partidoRepository.findById(idPartido);
	}

	public Partido create(Partido partido){		
		return this.partidoRepository.save(partido);
	}

	public Partido save(Partido partido){
		return this.partidoRepository.save(partido);
	}
	
	public boolean delete(Integer idPartido) {		
		boolean result = false;
		
		if(this.partidoRepository.existsById(idPartido)) {
			this.partidoRepository.deleteById(idPartido);
			result = true;
		}
		
		return result;
	}
	
}
