CREATE DATABASE carts_service;

CREATE TABLE IF NOT EXISTS carts(
    id SERIAL,
    user_id int,
    order_id int,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS cart_item(
    id SERIAL,
    cart_id int,
    product_id int,
    quantity int,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp,
    PRIMARY KEY (id)
);

INSERT INTO carts (user_id, order_id, created_at, updated_at, deleted_at) VALUES (1, 1, NOW(), null, null);
INSERT INTO cart_item (cart_id, product_id, quantity, created_at, updated_at, deleted_at) VALUES (1, 1, 3, NOW(), null, null);