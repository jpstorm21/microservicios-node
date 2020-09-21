import connection from "../helpers/connectionBD";

const productsCtrl = {};

// function that find a product by id
productsCtrl.getProductList = (req, res) => {
  try {
    const { id } = req.params;
    let query = `SELECT name, sku, description, price FROM products WHERE id = $1`;
    return connection
      .one(query, [id])
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        return res.status(400).json({
          error: err,
          message: "Error al obtener la lista de productos.",
        });
      });
  } catch (error) {
    res.status(590).json({
      error: err,
      message: "Error en el servidor.",
    });
  }
};

// function that find all products
productsCtrl.getProducts = (req, res) => {
  try {
    connection
      .any("SELECT * FROM products")
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
          message: "Error al obtener los productos.",
        });
      });
  } catch (error) {
    return res.status(500).json({
      error: err,
      message: "Error en el servidor.",
    });
  }
};

export default productsCtrl;
