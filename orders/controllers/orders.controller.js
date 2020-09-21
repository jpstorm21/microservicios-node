import connection from "../helpers/connectionBD";

const orderCtrl = {};

// function that find a order by user
orderCtrl.getOrderByUser = (req, res) => {
  try {
    const { id } = req.params;
    let query = `SELECT * FROM orders WHERE user_id = $1`;
    return connection
      .any(query, [id])
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        return res.status(400).json({
          error: err,
          message: "Error al obtener la lista de ordenes.",
        });
      });
  } catch (error) {
    return res.status(500).json({
      error: err,
      message: "Error en el servidor.",
    });
  }
};

// function that find all orders
orderCtrl.getOrders = (req, res) => {
  try {
    connection
      .any("SELECT * FROM orders")
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
          message: "Error al obtener las ordenes.",
        });
      });
  } catch (error) {
    return res.status(500).json({
      error: err,
      message: "Error en el servidor.",
    });
  }
};


export default orderCtrl;
