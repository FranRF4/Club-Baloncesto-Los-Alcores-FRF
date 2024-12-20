INSERT INTO TEMPORADAS (anio, categoria) VALUES (2024, '2ª Senior Provincial Masculina Sevilla');


INSERT INTO EQUIPO (nombre, categoria, escudo, nombre_campo, ubi_campo, color_local, color_visit) VALUES
('CB Los Alcores 2013', '2ª Senior Provincial Masculina Sevilla', NULL, 'Pabellón Santa Lucía', 'El Viso del Alcor, Sevilla', 'Desconocido', 'Desconocido'),
('EXCOM CB Puebla', '2ª Senior Provincial Masculina Sevilla', NULL, 'Pabellón Enrique Lora', 'Puebla del Río, Sevilla', 'Desconocido', 'Desconocido'),
('CB Coria', '2ª Senior Provincial Masculina Sevilla', NULL, 'Pabellón Municipal CB Coria', 'Coria del Río, Sevilla', 'Desconocido', 'Desconocido'),
('CD Tartessos Lebrija', '2ª Senior Provincial Masculina Sevilla', NULL, 'Pabellón Cubierto 2', 'Lebrija, Sevilla', 'Desconocido', 'Desconocido'),
('CB Paradas', '2ª Senior Provincial Masculina Sevilla', NULL, 'Pabellón Municipal Francisco Muñoz Moreno', 'Paradas, Sevilla', 'Desconocido', 'Desconocido'),
('CP Albancor', '2ª Senior Provincial Masculina Sevilla', NULL, 'Pabellón Cubierto Miguel Ángel Gómez Campuzano', 'Mairena del Alcor, Sevilla', 'Desconocido', 'Desconocido'),
('Juventud Deportiva Bormujos', '2ª Senior Provincial Masculina Sevilla', NULL, 'Pabellón Municipal de Bormujos', 'Bormujos, Sevilla', 'Desconocido', 'Desconocido'),
('CDB Guillena', '2ª Senior Provincial Masculina Sevilla', NULL, 'Pabellón Municipal de Deportes "La Villa"', 'Guillena, Sevilla', 'Desconocido', 'Desconocido'),
('Club de Baloncesto Sajuma', '2ª Senior Provincial Masculina Sevilla', NULL, 'Colegio Salesianos Santísima Trinidad (Pabellón)', 'Sevilla', 'Desconocido', 'Desconocido'),
('Clínica Montaño CDB Herrera', '2ª Senior Provincial Masculina Sevilla', NULL, 'Pabellón Municipal de Deportes', 'Herrera, Sevilla', 'Desconocido', 'Desconocido');



INSERT INTO JORNADA (semana, mes, temporada) VALUES
(3, 10, 1), -- Jornada 1
(4, 10, 1), -- Jornada 2
(2, 11, 1), -- Jornada 3
(3, 11, 1), -- Jornada 4
(4, 11, 1), -- Jornada 5
(1, 12, 1),  -- Jornada 6
(3, 12, 1), -- Jornada 7
(4, 12, 1), -- Jornada 8
(2, 1, 1), -- Jornada 9
(3, 1, 1), -- Jornada 10
(4, 1, 1), -- Jornada 11
(2, 2, 1), -- Jornada 12
(3, 2, 1), -- Jornada 13
(4, 2, 1),  -- Jornada 14
(1, 3, 1), -- Jornada 15
(2, 3, 1), -- Jornada 16
(3, 3, 1), -- Jornada 17
(4, 3, 1); -- Jornada 18


-- Inserción de partidos en la tabla PARTIDOS
INSERT INTO PARTIDOS (id_equip_local, id_equip_visit, fecha, hora, puntos_local, puntos_visitante, ganador, jornada) VALUES
-- Jornada 1: CB Los Alcores vs Juventud Deportiva Bormujos
(1, 7, '2024-10-20', '13:00:00', NULL, NULL, 1, 1),
-- Jornada 2: CB Paradas vs CB Los Alcores
(5, 1, '2024-10-25', '21:30:00', NULL, NULL, 1, 2),
-- Jornada 3: CB Los Alcores vs Clínica Montaño CDB Herrera
(1, 10, '2024-11-10', '13:00:00', NULL, NULL, 1, 3),
-- Jornada 4: CB Coria vs CB Los Alcores
(3, 1, '2024-11-17', '10:00:00', NULL, NULL, 3, 4),
-- Jornada 5: CB Los Alcores vs Club de Baloncesto Sajuma
(1, 9, '2024-11-24', '13:00:00', NULL, NULL, NULL, 5),
-- Jornada 6: CD Tartessos Lebrija vs CB Los Alcores
(4, 1, '2024-12-01', '18:00:00', NULL, NULL, 4, 6),
-- Jornada 7: CB Los Alcores vs CP Albancor
(1, 6, '2024-12-15', '13:00:00', NULL, NULL, 1, 7),
-- Jornada 8: CDB Guillena vs CB Los Alcores
(8, 1, '2024-12-21', '17:00:00', NULL, NULL, NULL, 8),
-- Jornada 9: CB Los Alcores vs EXCOM CB Puebla
(1, 2, '2025-01-12', '13:00:00', NULL, NULL, NULL, 9),
-- Jornada 10: Juventud Deportiva Bormujos vs CB Los Alcores
(7, 1, '2025-01-19', '19:15:00', NULL, NULL, NULL, 10),
-- Jornada 11: CB Los Alcores vs CB Paradas
(1, 5, '2025-01-26', '13:00:00', NULL, NULL, NULL, 11),
-- Jornada 12: Clínica Montaño CDB Herrera vs CB Los Alcores
(10, 1, '2025-02-09', '17:30:00', NULL, NULL, NULL, 12),
-- Jornada 13: CB Los Alcores vs CB Coria
(1, 3, '2025-02-16', '13:00:00', NULL, NULL, NULL, 13),
-- Jornada 14: Club de Baloncesto Sajuma vs CB Los Alcores
(9, 1, '2025-02-23', '17:45:00', NULL, NULL, NULL, 14),
-- Jornada 15: CB Los Alcores vs CD Tartessos Lebrija
(1, 4, '2025-03-09', '13:00:00', NULL, NULL, NULL, 15),
-- Jornada 16: CP Albancor vs CB Los Alcores
(6, 1, '2025-03-16', '19:30:00', NULL, NULL, NULL, 16),
-- Jornada 17: CB Los Alcores vs CDB Guillena
(1, 8, '2025-03-23', '13:00:00', NULL, NULL, NULL, 17),
-- Jornada 18: EXCOM CB Puebla vs CB Los Alcores
(2, 1, '2025-03-30', '12:00:00', NULL, NULL, NULL, 18);

