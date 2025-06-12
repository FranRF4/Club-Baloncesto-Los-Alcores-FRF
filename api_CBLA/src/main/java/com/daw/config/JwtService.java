package com.daw.config;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.daw.persistence.entities.Usuario;
import com.daw.persistence.repositories.UsuarioRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JwtService {

	private static final String SECRET_KEY = "T+GRAeg5Nb2eDWBOnfbgcv8B20QJ6uIn6LNRiC0HjRSXEJymwQOKyH2/JBY375YLr0T6/e8hZafeXk9bDCogo4mj2w5yjHyQr/+vxPovrFo=";

	@Autowired
	private UsuarioRepository usuarioRepository;

	public String generateToken(UserDetails userDetails) {
		Usuario usuario = usuarioRepository.findByEmail(userDetails.getUsername())
				.orElseThrow(() -> new UsernameNotFoundException("Usuario no Encontrado"));

		Map<String, Object> extraClaims = new HashMap<>();
		extraClaims.put("id", usuario.getId());
		extraClaims.put("username", usuario.getNombre());
		extraClaims.put("rol", usuario.getRol().name());

		return generateToken(extraClaims, usuario.getEmail());
	}

	public String generateToken(Map<String, Object> extraClaims, String subject) {
		return Jwts.builder()
				.setClaims(extraClaims)
				.setSubject(subject)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 24 horas
				.signWith(getSignInKey(), SignatureAlgorithm.HS256)
				.compact();
	}

	public String getEmail(String token) {
		return getClaim(token, Claims::getSubject);
	}

	public <T> T getClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaims(token);
		return claimsResolver.apply(claims);
	}

	private Claims getAllClaims(String token) {
		return Jwts
				.parserBuilder()
				.setSigningKey(getSignInKey())
				.build()
				.parseClaimsJws(token)
				.getBody();
	}

	private Key getSignInKey() {
		byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
		return Keys.hmacShaKeyFor(keyBytes);
	}

	public boolean validateToken(String token, UserDetails userDetails) {
		final String email = getEmail(token);
		return (email.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}

	private boolean isTokenExpired(String token) {
		return getExpiration(token).before(new Date());
	}

	private Date getExpiration(String token) {
		return getClaim(token, Claims::getExpiration);
	}
}
