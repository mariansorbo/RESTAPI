/* write CRUD functions:*/

const sql = require("./db.js");

/*campos de items:   idItem , descripcion, categoria, marca, precioU        */

// constructor
const Item = function(item) {
  this.descripcion = item.descripcion;
  this.categoria = item.categoria;
  this.marca = item.marca;
  this.precioU = item.precioU;
};

/*A   -  agregar un item al catalogo*/
Item.create = (item, result) => {
    /*Agregar parametros del stored procedure*/
    sql.query("agregarItemAlCatalogo_ADMIN(?, ?, ?, ?)", [item.descripcion, item.categoria , item.marca , item.precioU], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created item ")
    });
  };


/*C  -   listar todos los items*/
Item.getAll = result => {
    sql.query("getAllItems()", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("items: ", res);
      result(null, res);
    });
  };

/*  -   actualizar precio de un item*/
Item.ActualizarPrecioUnitario = (item, result) => {
    sql.query(
      "EditarPrecioItemDelCatalogo_ADMIN(?,?)",[item.idItem, item.precioU],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // no se realizo la operacion
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("precio del item actualizado ");
      }
    );
};

  /*E  -   Borrar un item de la tabla de items*/
Item.remove = (item, result) => {
    sql.query("deleteItem_ADMIN(?)", item.idItem, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // no se realizo la operacion
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("se borro el item con id=", idItem);
      result(null, res);
    });
  };


  module.exports = Item;




