console.log("Hola Mundo");
const { Pool } = require("pg");
const config = {
  user: "postgres",
  host: "localhost",
  password: "1234",
  database: "postgres",
};

const pool = new Pool(config);

const getUser = async () => {
  try {
    //await define que es asincrono
    const res = await pool.query("select * from usuario");
    //res.rows solo trae las columnas
    console.log(res.rows);
    //pool.end();
  } catch {
    console.log(e);
  }
  //console.log("Obtieniendo usuario");
};
//getUser();

const insertUser = async () => {
  //manera para ahorrar concatenaciones
  const text = "INSERT INTO usuario(correo, clave) VALUES ($1,$2)";
  const values = ["{user1}", "{pass}"];

  const res = await pool.query(text, values);
  console.log(res);
  pool.end();
};
//insertUser();

const deleteUser = async () => {
  //manera para ahorrar concatenaciones
  const text = "DELETE FROM usuario WHERE correo = $1";
  const value = ["{user1}"];

  const res = await pool.query(text, value);
  console.log(res);
  pool.end();
};
//deleteUser();

const updateUser = async () => {
  //manera para ahorrar concatenaciones
  const text = "UPDATE usuario SET correo = $1 WHERE correo = $2";
  const value = ["{user2}", "{user1}"];

  const res = await pool.query(text, value);
  console.log(res);
  pool.end();
};
//updateUser();

//intento de obtener los atributos de las consultas
const getCountOf = async () => {
  try {
    //await define que es asincrono
    const res = await pool.query("select count(*) from usuario");
    //res.rows trae solo las columnas en vez de toda la estructura
    //Convertir el JSON en una cadena
    var myJSON = JSON.stringify(res.rows[0]["count"]);
    console.log("Resultado de cuenta:" + myJSON);

    pool.end();
  } catch (e) {
    console.log(e);
  }
  //console.log("Obtieniendo usuario");
};
//getCountOf();
