package com.daw.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daw.services.AuthService;
import com.daw.web.controllers.models.AuthResponse;
import com.daw.web.controllers.models.AuthenticationRequest;
import com.daw.web.controllers.models.RegisterRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	
	@Autowired
	private AuthService authService;

	@PostMapping("/registro")
	public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request){
		return ResponseEntity.ok(authService.register(request));
	}
	
	@PostMapping("/autentificar")
	public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthenticationRequest request){
		return ResponseEntity.ok(authService.authenticate(request));
	}
}
