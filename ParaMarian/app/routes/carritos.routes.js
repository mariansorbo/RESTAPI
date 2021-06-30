
/*
post ---> crear
get  ---> devuelve
put  ---> actualizar
delete -> borrar
*/

module.exports = app => {

    const carritos = require("../controllers/carrito.controller.js");
  
    //----------------------- ABM DEL CONSUMIDOR-------------------------
    // agregar  item al carrito
    app.post("/carritos", carritos.insertarEnCarrito);
  
    // actualizar cantidad
    app.put("/carritos/:idCarrito", carritos.updateCarrito);
  
    // borrar item del acrrito
    app.delete("/items/:idItem", carritos.deleteFromCarrito);




    //----------------------- METODOS PRIVADOS----------------------------
  
    //ASIGNAR USUARIO A CARRITO
    app.put("/carritos/:idCarrito", carritos.asignarUsuarioACarrito);  /*este tmb usa el parametro "usuario"*///        FIX

    //Bloquear carrito(para evitar cambios en la composicion del carrito cuando la persona ya completo la venta)
    app.put("/carritos/:idCarrito", carritos.bloquearCarrito);


    
  };

