## Trabajo con NODE - vinculación entre Librerías y Libros

## IMPORTANTE: Se incluyen las variables de entorno solo como prueba

Para ejecutar primero instale las librerías necesarias: 
```npm install```

Luego ejecute la siguiente línea:
```node index```

### Se adjuntan querys en la carpeta src/bd para crear las tablas

NOTA: se puede crear una base de datos con:

```create database hola_mundo;```

Y los datos de acceso para generar el token son name de usuario y password "admin"

## Descripción:
Bueno, se crea el archivo sequelize-config, para establecer la comunicación con la base
de datos, luego se crean los modelos respectivos para vincular cada tabla con los modelos realizados.
Es entonces que se elaboran los respectivos servicios para que, usando el equalize, se pueda hacer uso de la base de datos, para crear, editar, consultar o información respectiva.
Ello de forma ordenada através de rutas que emplean los controller adecuados a cada endpoint solicitado según se requiera.

### A continuación se enuncian los endpoints para probar:

##Primero nos logueamos con admin, admin como usuario y password
```
http://localhost:8088/user/login
```

## Para librería (Para libro es similar cambiando library por book)

```
POST -> http://localhost:8088/library/crear
```
```
GET -> http://localhost:8088/library/obtener-por-id/1
GET -> http://localhost:8088/library/obtener-todos
```
```
PUT -> http://localhost:8088/library/editar/1
```
```
DELETE -> http://localhost:8088/library/eliminar/2
