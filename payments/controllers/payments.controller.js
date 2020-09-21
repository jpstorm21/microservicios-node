import connection from "../helpers/connectionBD";
import axios from "axios";

const paymentsCtrl = {};

// request to the service of carts
const requestProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/api/carts/productsByUser/${id}`)
      .then((response) => {
        const { data } = response;
        console.log(data)
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// function that find a orden by external_reference_id
paymentsCtrl.getProductsByExternal = (req, res) => {
  try {
    const { id } = req.params;
    let query = `SELECT order_id FROM payments WHERE external_reference_id = $1`;
    return connection
      .one(query, [id])
      .then((data) => {
        const order = data.orderId;
        console.log(order)
        requestProduct(order)
          .then((data) => {
            return res.status(200).json(data);
          })
          .catch((err) => {
            return res.status(400).json({
              error: err,
              message: "Error al obtener los productos asociados al pago.",
            });
          });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err,
          message: "Error al obtener los productos asociados al pago.",
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error en el servidor.",
      error,
    });
  }
};

// function that find all payments
paymentsCtrl.getPayments = (req, res) => {
  try {
    connection
      .any("SELECT * FROM payments")
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
          message: "Error al obtener los pagos.",
        });
      });
  } catch (error) {
    return res.status(500).json({
      error: err,
      message: "Error en el servidor.",
    });
  }
};

export default paymentsCtrl;
