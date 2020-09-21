import connection from "../helpers/connectionBD";
import axios from "axios";

const cartsCtrl = {};

// function that get the information of a product by id
const requestProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getInfoProduct = (data) => {
  return data.map((product) => {
    return requestProduct(product.productId).then((data) => {
      return data;
    });
  });
};

// function that get all carts_items of a user
cartsCtrl.getProductsByUser = (req, res) => {
  try {
    const { id } = req.params;
    let query = `SELECT product_id 
                  FROM cart_item INNER JOIN carts ON carts.id = cart_item.cart_id
                  WHERE carts.user_id = $1;`;
    return connection
      .any(query, [id])
      .then((data) => {
        let promises = getInfoProduct(data);
        Promise.all(promises)
          .then((results) => {
            return res.status(200).json(results);
          })
          .catch((err) => {
            return res.status(400).json({
              error: err,
              message: "Error al obtener los productos del carro.",
            });
          });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err,
          message: "Error al obtener los productos del carro.",
        });
      });
  } catch (error) {
    return res.status(500).json({
      error: err,
      message: "Error en el servidor.",
    });
  }
};

// function that get all carts
cartsCtrl.getCarts = (req, res) => {
  try {
    connection
      .any("SELECT * FROM carts")
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
          message: "Error al obtener los carritos.",
        });
      });
  } catch (error) {
    return res.status(500).json({
      error: err,
      message: "Error en el servidor.",
    });
  }
};

export default cartsCtrl;
