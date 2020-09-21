CREATE DATABASE orders_service;

CREATE TABLE IF NOT EXISTS orders(
    id SERIAL,
    user_id INTEGER,
    cart_id INTEGER,
    total_amount TEXT,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp,
    PRIMARY KEY (id)
);

INSERT INTO orders (user_id, cart_id, total_amount, created_at, updated_at, deleted_at) VALUES (1, 1, '50000', NOW(), null, null);