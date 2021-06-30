

const sql = require("./db.js");

/*campos de carrito: idCarrito ,idUsuario ,idItem , cantidad, bloqueado  */

// constructor
const Carrito = function(carrito) {
 

  //this.idCarrito = carrito.idCarrito; //se crea automaticamente cuando se inserta en la tabla de pedidos
  this.idUsuario = carrito.idUsuario;
  this.idItem = carrito.idItem;
  this.cantidad = carrito.cantidad;
  this.bloqueado = carrito.bloqueado;

};


/*----------------------------------------ABM DEL CARRITO PARA COMPRADOR-------------------------------- */

Carrito.insertarEnCarrito = (carrito,idItem,cantidad, result) => {
  sql.query("insertarEnCarrito(? , ?, ? )", [carrito.idCarrito,idItem, cantidad], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("item y cantidad insertado en el carrito con exito ");
  });
};


/*actualizar cantidad comprada de un cierto item del carrito*/

Carrito.updateCarrito = (idCarrito, idItem, cantidad , result) => {
  sql.query( 
    "updateCarrito(?,?,?)" , [idCarrito, idItem, cantidad], 
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("cantidad de item actualizada");
    }
  );
};

/*borrar item del carrito*/
Carrito.deleteFromCarrito = (idCarrito,item, result) => {
  sql.query("deleteFromCarrito( ? , ? )", [idCarrito, item.idItem], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
        // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }

    console.log("item borrado del carrito ");
  });
};






/*------------------------------------------------METODOS PRIVADOS--------------------------------*/

Carrito.asignarUsuarioACarrito = (usuario, carrito , result) => {
    sql.query( 
      "asignarUsuarioACarrito(?,?)" , [usuario.usuario, carrito.idCarrito], 
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("el carrito fue asignado a un usuario");
      }
    );
};

Carrito.bloquearCarrito = (carrito , result) => {
    sql.query( 
      "bloquearCarrito(?)" , carrito.idCarrito, 
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("el carrito fue bloqueado para evitar cambios luego de haber cerrado una venta");
      }
    );
};




module.exports = Carrito;