package com.daw.persistence.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Equipo")
@Getter
@Setter
@NoArgsConstructor
public class Equipo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 100, nullable = false)
	private String nombre;
	
	@Column(length = 50, nullable = false)
	private String categoria;
	
	@Column(length = 255, nullable = false)
	private String escudo;
	
	@Column(length = 100, nullable = false)
	private String nombre_campo;

	@Column(length = 255, nullable = false)
	private String ubi_campo;

	@Column(name= "color_local", length = 50, nullable = false)
	private String colorLocal;

	@Column(name= "color_visit", length = 50, nullable = false)
	private String colorVisit;

}
