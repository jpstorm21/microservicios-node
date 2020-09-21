CREATE DATABASE products_service;

CREATE TABLE IF NOT EXISTS products(
    id SERIAL,
    name TEXT,
    sku TEXT,
    description TEXT,
    price int,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp,
    PRIMARY KEY (id)
);

INSERT INTO products (name, sku, description, price, created_at, updated_at, deleted_at) VALUES ('prod1', '10001', 'alguna descripcion', 2000, NOW(), null, null);