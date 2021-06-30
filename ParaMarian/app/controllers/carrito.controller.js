

const Item = require("../models/carrito.model.js");

//------------------------GUARDAR UN ITEM y cantidad en el carrito
exports.insertarEnCarrito = (req, res) => {
    // validacion de la request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    /*  esta bien lo siguiente??*/
  const descripcion = new Descripcion({
    idCarrito:  req.body.idCarrito,
    idItem: req.body.idItem,
    cantidad: req.body.cantidad,
  });
  

  // guardar el la descripcion del item y cantidad en el carrito
  Descripcion.insertarEnCarrito(descripcion, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });

};


//---------------------- Actualizar la cantidad de un item del carrito
exports.updateCarrito = (req, res) => {
  
    // validacion de request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Carrito.updateCarrito(
    req.params.idItem,    //    FIX*/     updateCarrito tiene los siguientes parametros: idItem, cantidad, idCarrito
    new Item(req.body),   //    FIX */    corregir parametros
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


// borrar item del carrito
exports.deleteFromCarrito= (req, res) => {
    Carrito.deleteFromCarrito(req.params.idItem,  //   FIX     */   deleteFromCarrito tiene los siguientes parametros: idItem, idCarrito
        (err, data) => {  
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.idItem}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.idItem
            });
          }
        } else res.send({ message: `el item fue borrado exitosamente!` });
      });

};




//------------------------------------------------METODOS PRIVADOS---------------------------------------------------




exports.asignarUsuarioACarrito = (req, res) => {
  
    // validacion de request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Carrito.updateCarrito(
    req.params.idItem,    //    FIX*/     asignarUsuarioACarrito tiene los siguientes parametros: usuario, idCarrito
    new Item(req.body),   //    FIX */    corregir parametros
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

exports.bloquearCarrito = (req, res) => {
  
    // validacion de request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Carrito.bloquearCarrito(
    req.params.idCarrito,    //    FIX*/     asignarUsuarioACarrito tiene los siguientes parametros: usuario, idCarrito
    new Item(req.body),   //    FIX */    corregir parametros
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


//------------------------GUARDAR un carrito nuevo
exports.crearCarrito = (req, res) => {              //    fix   */   crearCarrito no tiene parametros
    // validacion de la request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    /*  esta bien lo siguiente??*/
  const carrito = new Carrito({
    usuario: null,
    bloqueado: 'false'
  });

  // guardar el nuevo carrito
  Carrito.crearCarrito(carrito, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the carrito."
      });
    else res.send(data);
  });

};




