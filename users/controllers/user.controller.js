import connection from "../helpers/connectionBD";

const userCtrl = {};

// function that find all users
userCtrl.getUserList = (req, res) => {
  try {
    let query = `SELECT * FROM users`;
    return connection
      .any(query)
      .then((data) =>
        res.status(200).json(
          data,
        )
      )
      .catch((err) => {
        res.status(400).json({
          error: err,
          message: "Error al obtener la lista de usuarios.",
        });
      });
  } catch (error) {
    return res.status(500).json({
      error: err,
      message: "Error en el servidor.",
    });
  }
};

export default userCtrl;
