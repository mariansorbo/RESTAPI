module.exports = app => {
    const usuarios = require("../controllers/usuario.controller.js");
  
    // Create a new Customer
    app.post("/usuarios", pedidos.crearPedido);
  
    // Update a Customer with customerId
    app.put("/usuarios/:usuario", pedidos.pedidoEntregado);
  
    // Delete a Customer with customerId
    app.delete("/usuarios/:usuario", pedidos.borrarPedido);
  
  };