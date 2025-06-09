package com.daw.services;

import java.time.LocalDate;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
public class AuthServiceImpl implements AuthService {

	private final UsuarioRepository usuarioRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;

	@Override
	public AuthResponse register(RegisterRequest request) {
		var usuario = Usuario.builder().username(request.getUsername()).email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.createdAt(LocalDate.now()).rol(Rol.USER).build();

		usuarioRepository.save(usuario);

		var jwtToken = jwtService.generateToken(usuario);

		return AuthResponse.builder().token(jwtToken).build();
	}

	@Override
	public AuthResponse authenticate(AuthenticationRequest request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		var usuario = usuarioRepository.findByEmail(request.getEmail()).orElseThrow();
		var jwtToken = jwtService.generateToken(usuario);
		return AuthResponse.builder().token(jwtToken).build();
	}

	

}
