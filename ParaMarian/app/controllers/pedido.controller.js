
//tengo que usar las siguientes funciones crud? o los reemplazo por el nombre del stored procedure?
/*create
findAll
findOne
update
delete
deleteAll*/

//------------------------------------------------------------------------------------------------
/*
const Customer = require("../models/customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};
*/

const Pedido = require("../models/pedido.model.js");

// Create and Save a new Customer
exports.crearPedido = (req, res) => {
  
    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a pedido
  const pedido = new Pedido({
    //idPedido    se crea automaticamente cuando se inserta en la tabla de pedidos
    usuario:req.body.usuario,
    idCarrito:req.body.idCarrito,
    direccion:req.body.direccion,
    fechaDeEntrega:req.body.fechaDeEntrega,
    entregado:req.body.entregado
    
  });

  // Save Customer in the database
  Pedido.crearPedido(pedido, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.pedidoEntregado = (req, res) => {
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Pedido.pedidoEntregado(
    req.params.idPedido,               //    FIX.
    new Customer(req.body),              //    FIX.
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.idPedido}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.idPedido
          });
        }
      } else res.send(data);
    }
  );
};

// Find a single Customer with a customerId
exports.borrarPedido = (req, res) => {
    Pedido.borrarPedido(req.params.idPedido, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.idPedido}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.idPedido
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
};
