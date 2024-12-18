CREATE DATABASE IF NOT EXISTS CBLA;
USE CBLA;

CREATE TABLE TEMPORADAS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    año INT NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

CREATE TABLE JORNADA (
    id INT AUTO_INCREMENT PRIMARY KEY,
    semana INT NOT NULL,
    mes INT NOT NULL,
    año INT NOT NULL,
    temporada INT,
    FOREIGN KEY (temporada) REFERENCES TEMPORADAS(id)
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

CREATE TABLE JUGADORES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    numero INT NOT NULL,
    pj INT NOT NULL,
    mpp INT NOT NULL,
    ppp INT NOT NULL,
    equipo INT,
    FOREIGN KEY (equipo) REFERENCES EQUIPO(id)
);

CREATE TABLE PARTIDOS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_equip_local INT,
    id_equip_visit INT,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    puntos_local INT NOT NULL,
    puntos_visitante INT NOT NULL,
    ganador INT,
    jornada INT,
    FOREIGN KEY (id_equip_local) REFERENCES EQUIPO(id),
    FOREIGN KEY (id_equip_visit) REFERENCES EQUIPO(id),
    FOREIGN KEY (ganador) REFERENCES EQUIPO(id),
    FOREIGN KEY (jornada) REFERENCES JORNADA(id)
);

CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
