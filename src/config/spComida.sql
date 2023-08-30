DELIMITER //
CREATE PROCEDURE spComidaSel(IN p_id INT,
  IN p_nombre VARCHAR(255),
  IN p_descripcion VARCHAR(255),
  IN p_tipo INT,
  IN p_precio DECIMAL(10, 2),
  IN p_habilitado BOOLEAN
)
BEGIN
  SELECT c.* FROM comidas c WHERE 
              c.id = COALESCE(p_id, c.id) and 
              c.nombre = COALESCE(p_nombre, c.nombre) and 
              c.descripcion = COALESCE(p_descripcion, c.descripcion) and 
              c.tipo = COALESCE(p_tipo, c.tipo) and 
              c.precio = COALESCE(p_precio, c.precio) and 
              c.habilitado = COALESCE(p_habilitado, c.habilitado);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE spComidaIns(
  IN p_nombre VARCHAR(255),
  IN p_descripcion VARCHAR(255),-- valor por defecto ''
  IN p_tipo INT,
  IN p_precio DECIMAL(10, 2),
  IN p_habilitado BOOLEAN       -- valor por defecto 1
)
BEGIN
  IF p_habilitado IS NULL THEN
    SET p_habilitado = 1;
  END IF;
  
  INSERT INTO comidas (nombre, descripcion, tipo, precio, habilitado)
  VALUES (p_nombre, p_descripcion, p_tipo, p_precio, p_habilitado);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE spComidaUpd(
  IN p_id INT,
  IN p_nombre VARCHAR(255),
  IN p_descripcion VARCHAR(255),
  IN p_tipo INT,
  IN p_precio DECIMAL(10, 2),
  IN p_habilitado BOOLEAN
)
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error al actualizar la comida';
  END;

  START TRANSACTION;
  UPDATE comidas
  SET
    nombre = p_nombre,
    descripcion = p_descripcion,
    tipo = p_tipo,
    precio = p_precio,
    habilitado = p_habilitado,
    fecha_update = CURRENT_TIMESTAMP
  WHERE id = p_id;
  COMMIT;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE spComidaHabilitarDeshabilitar(
  IN p_id INT,
  IN p_habilitado BOOLEAN
)
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error al habilitar/deshabilitar la comida';
  END;

  START TRANSACTION;
  UPDATE comidas
  SET
    habilitado = p_habilitado,
    fecha_update = CURRENT_TIMESTAMP
  WHERE id = p_id;
  COMMIT;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE spComidaDel(
  IN p_id INT
)
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error al borrar la comida';
  END;

  START TRANSACTION;
  DELETE FROM comidas WHERE id = p_id;
  COMMIT;
END //
DELIMITER ;