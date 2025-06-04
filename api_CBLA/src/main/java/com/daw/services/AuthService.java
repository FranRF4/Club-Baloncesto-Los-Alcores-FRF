package com.daw.services;

import com.daw.web.controllers.models.AuthResponse;
import com.daw.web.controllers.models.AuthenticationRequest;
import com.daw.web.controllers.models.RegisterRequest;

public interface AuthService {
	
	AuthResponse register(RegisterRequest request);
	
	AuthResponse authenticate(AuthenticationRequest request);

}
