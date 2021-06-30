const sql = require("./db.js");

// constructor
const Usuario = function(usuario) {
  this.nombreUsuario = usuario.usuario;//??
  this.contrasena = usuario.contrasena;
  this.mail = customer.mail;
  this.tipo = customer.tipo;
};

Usuario.create = (usuario, result) => {
  sql.query("crarUsuario(?,?,?,?)", [usuario.usuario,usuario.contrasena,usuario.mail, usuario.tipo], 
  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created usuario: ");
  });
};



/////////////////////////////METODOS PRIVADOS

getTipoUsuario

Usuario.getTipoUsuario = (nombreUsuario, result) => {
    sql.query('getTipoUsuario(?)'),nombreUsuario,
       (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  

Usuario.getPassword = (nombreUsuario, result) => {
  sql.query('getPassword(?)'),nombreUsuario,
     (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};


Usuario.validarInicioDeSesion = (nombreUsuario,contrasena, result) => {
    sql.query('validarInicioDeSesion(?,?)'),[nombreUsuario,contrasena],
       (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

module.exports = Usuario;