package com.daw.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.persistence.entities.Jornada;
import com.daw.persistence.repositories.JornadaRepository;

@Service
public class JornadaService {
    
    @Autowired
    private JornadaRepository jornadaRepository;
    
    // CRUDs
    public List<Jornada> findAll() {
        return this.jornadaRepository.findAll();
    }
    
    public Optional<Jornada> findById(Integer idJornada) {
        return this.jornadaRepository.findById(idJornada);
    }
    
    public boolean existsJornada(Integer idJornada) {
        return this.jornadaRepository.existsById(idJornada);
    }
    
    public Jornada update(Jornada jornada) {        
        Jornada existingJornada = jornadaRepository.findById(jornada.getId())
            .orElseThrow(() -> new RuntimeException("Jornada no encontrada"));

        if (jornada.getFase() != null) {
            existingJornada.setFase(jornada.getFase());
        }
        if (jornada.getTemporada() != null) {
            existingJornada.setTemporada(jornada.getTemporada());
        }
        if (jornada.getMes() != null) {
            existingJornada.setMes(jornada.getMes());
        }
        if (jornada.getSemana() != null) {
            existingJornada.setSemana(jornada.getSemana());
        }

        return jornadaRepository.save(existingJornada);
    }

    public Jornada create(Jornada jornada) {
        return this.jornadaRepository.save(jornada);
    }
    
    public Jornada save(Jornada jornada) {
        return this.jornadaRepository.save(jornada);
    }
    
    public boolean delete(Integer idJornada) {
        if (this.jornadaRepository.existsById(idJornada)) {
            this.jornadaRepository.deleteById(idJornada);
            return true;
        }
        return false;
    }
}
