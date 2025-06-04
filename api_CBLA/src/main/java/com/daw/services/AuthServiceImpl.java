package com.daw.services;


import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.daw.config.JwtService;
import com.daw.persistence.entities.Rol;
import com.daw.persistence.entities.Usuario;
import com.daw.persistence.repositories.UsuarioRepository;
import com.daw.web.controllers.models.AuthResponse;
import com.daw.web.controllers.models.AuthenticationRequest;
import com.daw.web.controllers.models.RegisterRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

	private final UsuarioRepository usuarioRepository;	
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	
	@Override
	public AuthResponse register(RegisterRequest request) {
		var usuario = Usuario.builder()
				.username(request.getUsername())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.rol(Rol.USER)
				.build();
		
		usuarioRepository.save(usuario);
		
		var jwtToken = jwtService.generateToken(usuario);
		return null;
	}

	@Override
	public AuthResponse authenticate(AuthenticationRequest request) {
		// TODO Auto-generated method stub
		return null;
	}

}
