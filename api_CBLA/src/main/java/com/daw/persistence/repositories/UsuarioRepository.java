package com.daw.persistence.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import com.daw.persistence.entities.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	Optional<Usuario> findByEmail(String email);

	Optional<Usuario> findByUsername(String username);


}
