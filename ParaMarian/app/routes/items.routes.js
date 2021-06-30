
/*
post ---> crear
get  ---> devuelve
put  ---> actualizar
delete -> borrar
*/

module.exports = app => {
    const items = require("../controllers/item.controller.js");
  
    // agregar item al carrito
    app.post("/items", items.create);
  
    // devolver listado de items
    app.get("/items", items.getAll);
  
    // actualizar precio unitario--
    app.put("/items/:idItem", items.ActualizarPrecioUnitario);
  
    // borrar item
    app.delete("/items/:idItem", items.remove);
  
    
  };


  