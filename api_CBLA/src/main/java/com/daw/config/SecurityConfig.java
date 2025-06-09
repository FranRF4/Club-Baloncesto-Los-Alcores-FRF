package com.daw.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.OrRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtFilter jwtFilter;
    private final AuthenticationProvider autenProvider;

    @Bean
public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
    httpSecurity
        .cors(Customizer.withDefaults()) // <-- HABILITA CORS
        .csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth
            .requestMatchers(publicEndPoint()).permitAll()
            .anyRequest().authenticated())
        .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authenticationProvider(autenProvider)
        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

    return httpSecurity.build();
}


    private RequestMatcher publicEndPoint() {
        return new OrRequestMatcher(
            new AntPathRequestMatcher("/auth/**"),
            new AntPathRequestMatcher("/equipos/**"),
            new AntPathRequestMatcher("/partidos/**"),
            new AntPathRequestMatcher("/partidos/partido/"),
            new AntPathRequestMatcher("/jornadas/**"),
            new AntPathRequestMatcher("/temporadas/**"),
            new AntPathRequestMatcher("/usuarios/**")
        );
    }
}
