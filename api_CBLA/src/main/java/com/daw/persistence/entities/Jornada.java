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
@Table(name = "Jornada")
@Getter
@Setter
@NoArgsConstructor
public class Jornada {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 1, nullable = false)
	private Integer semana;
	
	@Column(length = 2, nullable = false)
	private Integer mes;

	@Column(length = 1, nullable = false)
	private String fase;
	
	@Column(name = "id_temporada")
	private Integer idTemporada;

	@ManyToOne
	@JoinColumn(name = "id_temporada", referencedColumnName = "id", insertable = false, updatable = false)
	private Temporada temporada;

}


