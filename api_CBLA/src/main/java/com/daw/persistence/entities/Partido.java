package com.daw.persistence.entities;

import java.time.LocalDate;
import java.time.LocalTime;

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
@Table(name = "Partido")
@Getter
@Setter
@NoArgsConstructor
public class Partido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "id_equip_local")
	private Integer idEquipLocal;

	@Column(name = "id_equip_visit")
	private Integer idEquipVisit;

	private LocalDate fecha;

	private LocalTime hora;

	@Column(name = "puntos_local", nullable = false, unique = true)
	private Integer puntosLocal;

	@Column(name = "puntos_visitante", nullable = false, unique = true)
	private Integer puntosVisitante;

	@Column(name = "id_ganador")
	private Integer idGanador;

	@Column(name = "id_jornada")
	private Integer idJornada;

	@ManyToOne
	@JoinColumn(name = "id_equip_local", referencedColumnName = "id", insertable = false, updatable = false)
	private Equipo equip_local;

	@ManyToOne
	@JoinColumn(name = "id_equip_visit", referencedColumnName = "id", insertable = false, updatable = false)
	private Equipo equip_visit;

	@ManyToOne
	@JoinColumn(name = "id_ganador", referencedColumnName = "id", insertable = false, updatable = false)
	private Equipo ganador;

	@ManyToOne
	@JoinColumn(name = "id_jornada", referencedColumnName = "id", insertable = false, updatable = false)
	private Jornada jornada;

}

