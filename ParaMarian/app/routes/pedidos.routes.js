module.exports = app => {
    const pedidos = require("../controllers/pedido.controller.js");
  
    // Create a new Customer
    app.post("/pedidos", pedidos.crearPedido);
  
    // Update a Customer with customerId
    app.put("/pedidos/:idPedido", pedidos.pedidoEntregado);
  
    // Delete a Customer with customerId
    app.delete("/pedidos/:idPedido", pedidos.borrarPedido);
  
  };