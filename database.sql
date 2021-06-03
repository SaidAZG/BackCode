drop table usuario;
create table usuario(
	nombre varchar[50],
	correo varchar[50],
	clave varchar[50]
);

INSERT INTO usuario (nombre,correo, clave) VALUES ('{Said Zuniga}','{a@a.a}','{1234567}');
select * from usuario;