package com.daw.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.persistence.entities.Usuario;
import com.daw.persistence.repositories.UsuarioRepository;


@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;	

	//CRUDs simples
	public List<Usuario> findAll(){
		return this.usuarioRepository.findAll();
	}
	
	public boolean existsTemorada(Integer idUsuario){
		return this.usuarioRepository.existsById(idUsuario);
	}
	
	public Optional<Usuario> findById(Integer idUsuario){
		return this.usuarioRepository.findById(idUsuario);
	}

	public Usuario create(Usuario usuario){		
		return this.usuarioRepository.save(usuario);
	}

	public Usuario save(Usuario usuario){
		return this.usuarioRepository.save(usuario);
	}
	
	public boolean delete(Integer idUsuario) {		
		boolean result = false;
		
		if(this.usuarioRepository.existsById(idUsuario)) {
			this.usuarioRepository.deleteById(idUsuario);
			result = true;
		}
		
		return result;
	}
	
}
