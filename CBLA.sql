CREATE DATABASE IF NOT EXISTS CBLA;
USE CBLA;

CREATE TABLE TEMPORADA (
    id INT AUTO_INCREMENT PRIMARY KEY,
    anio INT NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

CREATE TABLE JORNADA (
    id INT AUTO_INCREMENT PRIMARY KEY,
    semana INT NOT NULL,
    mes INT NOT NULL,
    fase CHAR(1) NOT NULL,
    id_temporada INT,
    FOREIGN KEY (id_temporada) REFERENCES TEMPORADAS(id)
);

CREATE TABLE EQUIPO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    escudo VARCHAR(255),
    nombre_campo VARCHAR(100),
    ubi_campo VARCHAR(255),
    color_local VARCHAR(50),
    color_visit VARCHAR(50)
);

CREATE TABLE JUGADOR (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    imagen VARCHAR(255),
    edad INT NOT NULL,
    numero INT,
    posicion VARCHAR(50) NOT NULL,
    es_entrenador BOOLEAN NOT NULL,
    id_equipo INT,
    FOREIGN KEY (id_equipo) REFERENCES EQUIPO(id)
);

CREATE TABLE PARTIDO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_equip_local INT,
    id_equip_visit INT,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    puntos_local INT NOT NULL,
    puntos_visitante INT NOT NULL,
    id_ganador INT,
    id_jornada INT,
    FOREIGN KEY (id_equip_local) REFERENCES EQUIPO(id),
    FOREIGN KEY (id_equip_visit) REFERENCES EQUIPO(id),
    FOREIGN KEY (id_ganador) REFERENCES EQUIPO(id),
    FOREIGN KEY (id_jornada) REFERENCES JORNADA(id)
);

CREATE TABLE USUARIO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Usuario_Sigue_Jugador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_jugador INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES USUARIO(id),
    FOREIGN KEY (id_jugador) REFERENCES JUGADOR(id),
    UNIQUE (id_usuario, id_jugador)
);

