
/*Contiene los metodos para el CRUD, y sera creado en el siguiente paso*/


const Item = require("../models/item.model.js");

//------------------------CREAR Y GUARDAR UN ITEM
exports.create = (req, res) => {
    // validacion de la request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // crear objeto item
  const item = new Item({
    //idItem    se crea automaticamente cuando se inserta en la tabla de pedidos
    descripcion: req.body.descripcion,
    categoria: req.body.categoria,
    marca: req.body.marca,
    precioU:req.body.precioU
  });

  // guardar el item en la base de datos
  Item.create(item, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });

};

// -----------------------DEVOLVER TODOS LOS ITEMS
exports.getAll = (req, res) => {
    Item.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving items."
          });
        else res.send(data);//devuelve listado
      });
};


// Actualizar precio de item
exports.ActualizarPrecioUnitario = (req, res) => {
  
    // validacion de request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Customer.ActualizarPrecioUnitario(
    req.params.idItem,
    new Item(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.idItem}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.idItem
          });
        }
      } else res.send(data);//operacion terminada con exito
    }
  );

};


// borrar item
exports.remove = (req, res) => {
  
    Customer.remove(req.params.idItem, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.customerId
            });
          }
        } else res.send({ message: `el item fue borrado exitosamente!` });
      });

};

