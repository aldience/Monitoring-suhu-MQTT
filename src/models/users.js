const dbPool = require("../config/database");

//MODEL GET (READ)
const getAllusers = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

//MODEL POST (CREATE)
const creatNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name ,email ,address) 
                      VALUES ( '${body.name}','${body.email}','${body.address}')`;

  return dbPool.execute(SQLQuery);
};

//MODEL PATCH  (EDIT)
const updateUsers = (body, id) => {
  const SQLQuery = `UPDATE users 
                        SET name = '${body.name}' , email = '${body.email}', address = '${body.address}'
                        WHERE id= ${id}`;

  return dbPool.execute(SQLQuery);
};

//DELETE (HAPUS)
const deleteUsers = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllusers,
  creatNewUser,
  updateUsers,
  deleteUsers,
};
