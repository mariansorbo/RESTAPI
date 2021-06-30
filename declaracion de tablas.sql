#create database sportPage;
create database sportpage;
use sportPage;




/*DROP DATABASE sportpage;*/

/* idusuario int -->usuario varchar(50)  */
create table usuarios(
usuario varchar(50) PRIMARY KEY,
contrasena varchar(50) not null,
mail varchar(50) not null,
tipo varchar(50) not null
);


create table items(
idItem int AUTO_INCREMENT PRIMARY KEY,
descripcion varchar(50) not null,
categoria varchar(50) not null,
marca varchar(50) not null,
precioU int not null
);

create table carritos(
idCarrito int  PRIMARY KEY ,
Usuario varchar(50) ,
bloqueado boolean ,
FOREIGN KEY (Usuario) REFERENCES usuarios(Usuario)
);

create table descripciones(
idCarrito int, 
idItem int not null,
cantidad int,
FOREIGN KEY (idCarrito) REFERENCES carritos(idCarrito)
);

create table pedidos(
idPedido int AUTO_INCREMENT PRIMARY KEY,
Usuario varchar(50) not null,
idCarrito int not null,
direccion varchar(50) not null,
fechaDeEntrega TIMESTAMP ,
entregado BOOLEAN not null,
FOREIGN KEY (idCarrito) REFERENCES Carritos(idCarrito),
FOREIGN KEY (Usuario) REFERENCES usuarios(Usuario)
);

