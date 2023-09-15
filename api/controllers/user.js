import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM empleados";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO empleados(`nombre`, `edad`, `pais`, `cargo`, `anios`) VALUES(?)";

  const values = [
    req.body.nombre,
    req.body.edad,
    req.body.pais,
    req.body.cargo,
    req.body.anios,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empleado creado satisfactoriamente.");
  });
};

export const updateUser = (req, res) => {
  const q =
		"UPDATE empleados SET `nombre` = ?, `edad` = ?, `pais` = ?, `cargo` = ?, `anios` = ? WHERE `idempleado` = ?";

  const values = [
    req.body.nombre,
    req.body.edad,
    req.body.pais,
    req.body.cargo,
    req.body.anios,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empleado actualizado satisfactoriamente.");
  });
};

export default function deleteUser(req, res) {
  const q = "DELETE FROM empleados WHERE `idempleado` = ?";
  
  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
  
    return res.status(200).json("Empleado eliminado satisfactoriamente.");
  });

}

/*
const deleteUser = (req, res) => {
  const q = "DELETE FROM empleados WHERE `idempleado` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empleado eliminado satisfactoriamente.");
  });
};
*/