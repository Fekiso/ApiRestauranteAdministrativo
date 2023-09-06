= CREATE DATABASE `restaurante`;
CREATE TABLE `tipos_comida` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  `habilitado` TINYINT NOT NULL DEFAULT 1,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_update` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
'5',
'Pizzas',
NULL,
'1',
'2023-08-26 09:58:51',
NULL '6',
'Hamburguesas',
NULL,
'1',
'2023-08-26 09:58:51',
NULL '7',
'Sandwiches',
NULL,
'1',
'2023-08-26 09:58:51',
NULL '8',
'Tablas',
NULL,
'1',
'2023-08-26 09:58:51',
NULL '9',
'Deleites',
NULL,
'1',
'2023-08-26 09:58:51',
NULL '10',
'Fritas',
NULL,
'1',
'2023-08-26 09:58:51',
NULL CREATE TABLE `comidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `tipo` int NOT NULL,
  `precio` decimal(10, 2) NOT NULL,
  `habilitado` TINYINT NOT NULL DEFAULT 1,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_update` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
'1',
'Ragnar(rucula)',
'Salsa de tomate, mozzarella, rucula, jamon crudo, aceite de oliva, parmesano rayado y aceitunas negras',
'1',
'5300.00',
'1',
'2023-08-26 09:40:29',
NULL '2',
'Ibar(Especial)',
'Salsa de tomate, mozzarella, jamon cocido, morrones en vinagreta, oregano y aceitunas verdes',
'1',
'4500.00',
'1',
'2023-08-26 19:44:00',
NULL '3',
'Othila',
'Salsa de tomate, mozzarella, jamon cocido, pimientos y cebollas asadas, huvos rallados y panceta crocante',
'1',
'5400.00',
'1',
'2023-08-26 19:46:07',
NULL '4',
'Othila',
'Salsa de tomate, mozzarella, jamon cocido, pimientos y cebollas asadas, huvos rallados y panceta crocante',
'1',
'5400.00',
'1',
'2023-08-26 21:07:09',
NULL CREATE TABLE `tipo_bebida` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  `habilitado` TINYINT NOT NULL DEFAULT 1,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_update` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `bebidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `tipo` int NOT NULL,
  `precio` decimal(10, 2) NOT NULL,
  `habilitado` TINYINT NOT NULL DEFAULT 1,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_update` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `tipos_rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  `habilitado` TINYINT NOT NULL DEFAULT 1,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_update` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `restaurante`.`tipos_rol` (`nombre`, `habilitado`)
VALUES ('Administrador', '1');
INSERT INTO `restaurante`.`tipos_rol` (`nombre`, `habilitado`)
VALUES ('Cajero', '1');
INSERT INTO `restaurante`.`tipos_rol` (`nombre`, `habilitado`)
VALUES ('Mozo', '1');
INSERT INTO `restaurante`.`tipos_rol` (`nombre`, `habilitado`)
VALUES ('Cocinero', '1');
INSERT INTO `restaurante`.`tipos_rol` (`nombre`, `habilitado`)
VALUES ('Repartidor', '1');
CREATE TABLE `tipo_documento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  `habilitado` TINYINT NOT NULL DEFAULT 1,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_update` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `restaurante`.`tipos_documento` (`nombre`, `habilitado`)
VALUES ('Documento Unico', '1');
INSERT INTO `restaurante`.`tipos_documento` (`nombre`, `habilitado`)
VALUES ('Cedula Identidad', '1');
INSERT INTO `restaurante`.`tipos_documento` (`nombre`, `habilitado`)
VALUES ('Pasaporte', '1');
CREATE TABLE `empleados` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(16) NOT NULL,
  `pass` VARCHAR(32) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `tipoDocumento` TINYINT NOT NULL DEFAULT 1,
  `nroDocumento` BIGINT(10) NOT NULL,
  `rol` TINYINT NOT NULL DEFAULT 1,
  `telefono` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `habilitado` TINYINT NOT NULL DEFAULT 1,
  `fecha_creacion` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_update` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nroDocumento_UNIQUE` (`nroDocumento` ASC) VISIBLE,
  UNIQUE INDEX `user_UNIQUE` (`user` ASC) VISIBLE
);