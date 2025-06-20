package com.daw.persistence.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Jugador")
@Getter
@Setter
@NoArgsConstructor
public class Jugador {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 100, nullable = false)
	private String nombre;
	
	@Column(length = 100, nullable = false)
	private String apellidos;

	@Column(length = 255)
	private String imagen;
	
	@Column(length = 2)
	private Integer edad;
	
	@Column(length = 2)
	private Integer numero;

	@Column(nullable = false)
	private String posicion;
	
	@Column(name = "es_entrenador", nullable = false)
	private Boolean esEntrenador;

	@Column(name = "id_equipo")
	private Integer idEquipo;
	
	@ManyToOne
	@JoinColumn(name = "id_equipo", referencedColumnName = "id", insertable = false, updatable = false)
	private Equipo equipo;

}

