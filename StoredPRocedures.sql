/*-----   ABM de items para admin    -------*/
/*---------------------------ITEMS-----------------------*/
use sportpage;
DELIMITER $$
CREATE PROCEDURE agregarItemAlCatalogo_ADMIN (in VARdescripcion varchar(50),in VARcategoria varchar(50) ,in VARmarca varchar(50),in VARprecioU int)
BEGIN	
    INSERT INTO items (descripcion, categoria, marca, precioU)
	VALUES (VARdescripcion, VARcategoria, VARmarca, VARprecioU);
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE EditarPrecioItemDelCatalogo_ADMIN(in VARidItem int,in VARprecioU int)
BEGIN	

	UPDATE items
	SET precioU=VARprecioU WHERE idItem=VARidItem;
END $$
DELIMITER ;

DELIMITER $$
create procedure BorrarItemDelCatalogo_ADMIN (in VARidItem int )
BEGIN	
	DELETE FROM items
	WHERE idItem=VARidItem;
END $$
DELIMITER ;

DELIMITER $$
create procedure delete_ADMIN (in VARidItem int )
BEGIN	
	DELETE FROM items
	WHERE idItem=VARidItem;
END $$
DELIMITER ;


/*SOLO SE PUEDE EDITAR EL PRECIO DEL ITEM. EL NOMBRE, LA MARCA, LA CATEGORIA, Y LA DESCRIPCION NO PUEDEN SER ACTUALIZADOS,
SOLO EL PRECIO, PARA ESO HAY QUE BORRAR EL ITEM Y CREAR UNO NUEVO*/


/*---------------------------CARRITO-----------------------*/


/*Cosas utiles*/

#GET idCarrito
DELIMITER $$
CREATE PROCEDURE getIdCarrito(
	IN VARidUsuario int
)
BEGIN
	select idCarrito
    from carritos
    where idUsuario=VARidUsuario
    limit 1;
END $$
DELIMITER ;



/* MUESTRA UNA VISTA DE LA DESCRIPCION DEL CARRITO
DELIMITER $$
CREATE PROCEDURE 
  VIEWDescripcionCarritoEstatica( VARidCarrito INT )
BEGIN  
	SELECT
        items.descripcion,
		items.precioU,
		carritos.cantidad,
		sum(carritos.cantidad*items.precioU) as subtotal
    FROM carritos
    ORDER BY subtotal DESC
	inner join items on carritos.idItem=items.idItem; 
END $$
DELIMITER ;*/


/*-----   ABM carrito para comprador -------*/

#insertar producto nuevo al carrito
DELIMITER $$
CREATE PROCEDURE insertarEnCarrito(
	IN VARidItem int, in VARcantidad int ,in VARidCarrito int,in VARidUsuario int
)
BEGIN
	insert into carritos(idCarrito  ,idUsuario , idItem, cantidad )
    values     (VARidCarrito, VARidUsuario, VARidItem, VARcantidad) ;
END $$
DELIMITER ;

#borrar item de carrito
DELIMITER $$
CREATE PROCEDURE deleteFromCarrito(
	IN VARidCarrito int,
    IN VARidItem int
)
BEGIN
	DELETE FROM `carritos` 
    WHERE idCarrito=VARidCarrito 
    and   idItem=VARidItem;
END$$
DELIMITER ;

#actualizar cantidad comprada de un cierto item del carrito
DELIMITER $$
CREATE PROCEDURE updateCarrito(
	IN VARidItem int , IN VARCantidad int, in VARidCarrito int
)
BEGIN
	UPDATE carritos
	SET cantidad = VARCantidad
	WHERE idCarrito=VARidCarrito
	and   idItem=VARidItem;
    
END$$
DELIMITER ;


/*-----------------------------PEDIDOS------------------------*/




use sportpage;


DELIMITER $$
CREATE PROCEDURE crearPedido(
	 IN VARusuario varchar(50), in VARidCarrito int, VARdireccion varchar(50), in VARfechaEntrega date , in VARentregado boolean
)
BEGIN
	INSERT INTO pedidos (idUsuario, idCarrito, direccion, fechaDeEntrega , entregado)
	VALUES (VARusuario, VARidCarrito,VARdireccion, VARfechaEntrega, VARentregado );
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE borrarPedido(
	 IN VARidPedido int
)
BEGIN
	DELETE FROM `pedidos` 
    WHERE idPedido=VARidPedido ;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE pedidoEntregado(
	 IN VARidPedido int
)
BEGIN
	UPDATE pedidos
	SET entregado = 'true'
	WHERE idPedido=VARidPedido ;
END $$
DELIMITER ;




/*mostrarVentas*/

/*mostrarPendientes*/




/*-----------------------------USUARIOS------------------------*/



DELIMITER $$
CREATE PROCEDURE crearUsuario(
	 IN VARusuario varchar(50), in VARcontrasena varchar(50), in VARMail varchar(50), in VARtipo varchar(50)
)
BEGIN
	INSERT INTO usuarios (Usuario, contrasena, Mail, tipo)
	VALUES (VARusuario, VARcontrasena,VARMail, VARtipo );
END $$
DELIMITER ;


/*saber si el usuario es admin o comprador*/
DELIMITER $$
create procedure getTipoUsuario(
	 VARUsuario varchar(50)
)
BEGIN
	select tipo
    from usuarios
    where Usuario=VARUsuario;
END$$
;


  

DELIMITER $$
CREATE procedure getPassword(  
	VARUsuario varchar(50)
)   
BEGIN  
	select contrasena
	from usuarios
	where Usuario=VARUsuario;
END$$  
DELIMITER ;

/*
DELIMITER  $$         
CREATE procedure  validarInicioDeSesion(VARUsuario varchar(50),VARContrasena VARCHAR(50)) 
BEGIN
	if 
	DECLARE contrasena VARCHAR(50) ;
    call getPassword(VARUsuario);
	SET @contrasena  = call getPassword(VARUsuario);
	SELECT IF(contrasena=VARContrasena, RETURN 'true', RETURN 'false');
END $$
DELIMITER ;

*/

