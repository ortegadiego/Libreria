CREATE TABLE Libros(
	id int not null primary key auto_increment,
	isbn int not null,
	titulo varchar(100) not null,
	autor varchar(100) not null,
	year varchar(4) not null,
	library INTEGER REFERENCES Librerias(id) ON DELETE SET NULL ON UPDATE CASCADE,
	eliminado bit
)
