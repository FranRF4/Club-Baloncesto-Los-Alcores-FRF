INSERT INTO temporada (anio, categoria) VALUES (2024, '2ª Senior Provincial Masculina Sevilla');


INSERT INTO equipo (nombre, categoria, escudo, nombre_campo, ubi_campo, color_local, color_visit) VALUES
('CB Los Alcores 2013', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/p6FCyWM9/1-CB-Los-Alcores.jpg", 'Pabellón Santa Lucía', 'El Viso del Alcor, Sevilla', 'Azul', 'Blanco'),
('EXCOM CB Puebla', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/ntNYC2p/2-EXCOM-CB-Puebla.jpg", 'Pabellón Enrique Lora', 'Puebla del Río, Sevilla', 'Azul', 'Blanco'),
('CB Coria', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/RGM66YyK/3-CB-Coria.png", 'Pabellón Municipal CB Coria', 'Coria del Río, Sevilla', 'Azul', 'Blanco'),
('CD Tartessos Lebrija', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/Gmdy0N6/4-CD-Tartessos-Lebrija.jpg", 'Pabellón Cubierto 2', 'Lebrija, Sevilla', 'Blanco', 'Azul'),
('CB Paradas', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/pvXBWzzR/5-CB-Paradas.png", 'Pabellón Municipal Francisco Muñoz Moreno', 'Paradas, Sevilla', 'Morado', 'Amarillo'),
('CP Albancor', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/ycNTRHYn/6-CP-Albancor.jpg", 'Pabellón Cubierto Miguel Ángel Gómez Campuzano', 'Mairena del Alcor, Sevilla', 'Negro', 'Blanco'),
('Juventud Deportiva Bormujos', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/fGCtWYjd/7-Juventud-Deportiva-Bormujos.jpg", 'Pabellón Municipal de Bormujos', 'Bormujos, Sevilla', 'Blanco', 'Verde'),
('CDB Guillena', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/mCDzFGfL/8-CDB-Guillena.jpg", 'Pabellón Municipal de Deportes "La Villa"', 'Guillena, Sevilla', 'Rojo', 'Azul'),
('Club de Baloncesto Sajuma', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/7NSbYkdc/9-Club-de-Baloncesto-Sajuma.png", 'Colegio Salesianos Santísima Trinidad', 'Sevilla', 'Rojo', 'Blanco'),
('Clínica Montaño CDB Herrera', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/yFH2t59j/10-Cl-nica-Monta-o-CDB-Herrera.png", 'Pabellón Municipal de Deportes', 'Herrera, Sevilla', 'Negro', 'Rojo'),
('CB El Coronil', '2ª Senior Provincial Masculina Sevilla', "https://i.ibb.co/20BvvNF0/11-CB-El-Coronil.webp", 'Pabellón Municipal el Coronil', 'Coronil, Sevilla', 'Negro', 'Verde');


INSERT INTO jornada (semana, mes, fase, id_temporada) VALUES
(3, 10, 1, 1), -- Jornada 1
(4, 10, 1, 1), -- Jornada 2
(2, 11, 1, 1), -- Jornada 3
(3, 11, 1, 1), -- Jornada 4
(5, 3, 1, 1), -- Jornada 5
(1, 12, 1, 1), -- Jornada 6
(3, 12, 1, 1), -- Jornada 7
(4, 12, 1, 1), -- Jornada 8
(2, 1, 1, 1), -- Jornada 9
(3, 1, 1, 1), -- Jornada 10
(4, 1, 1, 1), -- Jornada 11
(3, 3, 1, 1), -- Jornada 12
(3, 2, 1, 1), -- Jornada 13
(4, 2, 1, 1), -- Jornada 14
(2, 3, 1, 1), -- Jornada 15
(3, 3, 1, 1), -- Jornada 16
(4, 3, 1, 1), -- Jornada 17
(5, 3, 1, 1), -- Jornada 18
(1, 4, "Octavos", 1), -- Octavos 1
(2, 4, "Octavos", 1), -- Octavos 2
(1, 5, "Cuartos", 1), -- Cuartos 1
(3, 5, "Cuartos", 1), -- Cuartos 2
(4, 5, "Semifinal", 1), -- Semis 
(4, 5, "Final", 1); -- Final 



INSERT INTO partido (id_equip_local, id_equip_visit, fecha, hora, puntos_local, puntos_visitante, id_ganador, id_jornada) VALUES
-- Jornada 1: CB Los Alcores vs Juventud Deportiva Bormujos
(1, 7, '2024-10-20', '13:00:00', 63, 51, 1, 1),
-- Jornada 2: CB Paradas vs CB Los Alcores
(5, 1, '2024-10-25', '21:30:00', 66, 73, 1, 2),
-- Jornada 3: CB Los Alcores vs Clínica Montaño CDB Herrera
(1, 10, '2024-11-10', '13:00:00', 75, 74, 1, 3),
-- Jornada 4: CB Coria vs CB Los Alcores
(3, 1, '2024-11-17', '10:00:00', 81, 48, 3, 4),
-- Jornada 5: CB Los Alcores vs Club de Baloncesto Sajuma
(1, 9, '2025-03-26', '21:15:00', 68, 41, 1, 5),
-- Jornada 6: CD Tartessos Lebrija vs CB Los Alcores
(4, 1, '2024-12-01', '18:00:00', 78, 57, 4, 6),
-- Jornada 7: CB Los Alcores vs CP Albancor
(1, 6, '2024-12-15', '13:00:00', 59, 33, 1, 7),
-- Jornada 8: CDB Guillena vs CB Los Alcores
(8, 1, '2024-12-21', '17:00:00', 50, 58, 1, 8),
-- Jornada 9: CB Los Alcores vs EXCOM CB Puebla
(1, 2, '2025-01-12', '13:00:00', 56, 40, 1, 9),
-- Jornada 10: Juventud Deportiva Bormujos vs CB Los Alcores
(7, 1, '2025-01-19', '19:15:00', 44, 61, 1, 10),
-- Jornada 11: CB Los Alcores vs CB Paradas
(1, 5, '2025-01-26', '13:00:00', 60, 51, 1, 11),
-- Jornada 12: Clínica Montaño CDB Herrera vs CB Los Alcores
(10, 1, '2025-03-14', '21:00:00', 44, 62, 1, 12),
-- Jornada 13: CB Los Alcores vs CB Coria
(1, 3, '2025-02-16', '13:00:00', 58, 69, 3, 13),
-- Jornada 14: Club de Baloncesto Sajuma vs CB Los Alcores
(9, 1, '2025-02-23', '17:45:00', 56, 46, 9, 14),
-- Jornada 15: CB Los Alcores vs CD Tartessos Lebrija
(1, 4, '2025-03-09', '13:00:00', 59, 62, 4, 15),
-- Jornada 16: CP Albancor vs CB Los Alcores
(6, 1, '2025-03-16', '19:30:00', 0, 2, 1, 16),
-- Jornada 17: CB Los Alcores vs CDB Guillena
(1, 8, '2025-03-23', '13:00:00', 63, 54, 1, 17),
-- Jornada 18: EXCOM CB Puebla vs CB Los Alcores
(2, 1, '2025-03-30', '12:00:00', 50, 59, 1, 18),
-- Octavos 1: CB El Coronil vs CB Los Alcores
(11, 1, '2025-04-04', '21:00:00', 48, 41, 11, 19),
-- Octavos 2: CB Los Alcores vs CB El Coronil
(1, 11, '2025-04-12', '12:00:00', 60, 49, 1, 20),
-- Cuartos 1: CP Albancor vs CB Los Alcores
(6, 1, '2025-05-04', '19:00:00', 68, 71, 1, 21),
-- Cuartos 2: CB Los Alcores vs CP Albancor
(1, 6, '2025-05-19', '13:00:00', 52, 52, 1, 22),
-- Semis: CB Los Alcores vs Clínica Montaño CDB Herrera
(1, 10, '2025-05-24', '19:00:00', 55, 49, 1, 23),
-- Final: Tartessos Lebrija vs CD CB Los Alcores
(4, 1, '2025-05-25', '13:30:00', 65, 57, 4, 24);

INSERT INTO jugador (nombre, apellidos, imagen, edad, numero, posicion, es_entrenador, id_equipo) VALUES
('Antonio', 'Morillo Lopez', "https://i.ibb.co/h1mJ6wND/morillo.jpg", 0, 10, 'Pivot/Ala-Pivot', FALSE, 1),
('Jose Alberto', 'Navarro Capitas', "https://i.ibb.co/BKQkck00/alberto.jpg", 36, 2, 'Escolta/Alero', FALSE, 1),
('Carlos', 'Carreño Jiménez', "https://i.ibb.co/N6d4YbQK/carlos.jpg", 38, 13, 'Base', FALSE, 1),
('Gabriel del Amor', 'León Jiménez', "https://i.ibb.co/hR3MGr3c/gabri.jpg", 20, 12, 'Base', FALSE, 1),
('Antonio', 'Rubio Reyes', "https://i.ibb.co/fd7HtB0d/rubio.jpg", 0, 18, 'Pivot', FALSE, 1),
('Pablo', 'Bonilla Cepero', "https://i.ibb.co/7JmLVvtP/pablo.jpg", 18, 14, 'Escolta/Alero', FALSE, 1),
('Antonio', 'Vargas Aranda', "https://i.ibb.co/95hnpBj/vargas.jpg", 30, 21, 'Pivot/Ala-Pivot', FALSE, 1),
('Oscar', 'Falcon Marquez', "https://i.ibb.co/qMFckc8v/ojca.jpg", 0, 7, 'Escolta/Alero', FALSE, 1),
('Jose Antonio', 'Atienza Costazar', "https://i.ibb.co/d0cmgsd7/josan.jpg", 0, 3, 'Base', FALSE, 1),
('Carlos', 'Atienza Costazar', "https://i.ibb.co/PzmBgwVX/charly.jpg", 0, 15, 'Alero/Ala-Pivot', FALSE, 1),
('Francisco', 'Ruiz Florido', "https://i.ibb.co/PGB4Vzs7/fran.jpg", 20, 8, 'Alero/Ala-Pivot', FALSE, 1),
('Jesús', 'Poyatos Herrera', "https://i.ibb.co/yFscRFxd/poyi.jpg", 31, 17, 'Alero', FALSE, 1),
('Adrian', 'Blanque Muñoz', "https://i.ibb.co/VYtZFdgP/adri.jpg", 28, 6, 'Base', FALSE, 1),
('José María', 'Mena Bernal Salguero', "https://i.ibb.co/RpPhZZsw/mena.jpg", NULL, NULL, 'Entrenador', TRUE, 1),
('Jose Manuel', 'Romero Huertas', "https://i.ibb.co/MxqSTMVk/rome.jpg", 30, 9, 'Escolta', FALSE, 1),
('Pedro Nolasco', 'Ruiz Gomez', "https://i.ibb.co/JRHCB147/pedro.jpg", 20, 5, 'Ala-Pivot', FALSE, 1);


