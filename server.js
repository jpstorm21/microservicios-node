import path from 'path';
import gateway from 'express-gateway'
import './users/serverUser';
import './orders/serverOrders';
import './products/serverProducts';
import './payments/serverPayments';
import './carts/serverCarts';

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
