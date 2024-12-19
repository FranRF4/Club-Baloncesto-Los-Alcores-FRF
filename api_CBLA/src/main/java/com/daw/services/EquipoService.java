package com.daw.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.persistence.entities.Equipo;
import com.daw.persistence.repositories.EquipoRepository;

@Service
public class EquipoService {
	
	@Autowired
	private EquipoRepository equipoRepository;
	
	//CRUDs
	public List<Equipo> findAll(){
		return this.equipoRepository.findAll();
	}
	
	public boolean existsCliente(Integer idEquipo){
		return this.equipoRepository.existsById(idEquipo);
	}
	
	public Optional<Equipo> findById(int idEquipo){
		return this.equipoRepository.findById(idEquipo);
	}
	
	public Equipo create(Equipo equipo) {
		return this.equipoRepository.save(equipo);
	}
	
	public Equipo save(Equipo equipo) {
		return this.equipoRepository.save(equipo);
	}
	
	public boolean delete(Integer idEquipo) {
		boolean result = false;
		
		if(this.equipoRepository.existsById(idEquipo)) {
			this.equipoRepository.deleteById(idEquipo);
			result = true;
		}
		
		return result;
	}

}
