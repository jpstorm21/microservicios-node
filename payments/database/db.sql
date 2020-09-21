CREATE DATABASE payments_service;

CREATE TABLE IF NOT EXISTS payments(
    id SERIAL,
    order_id int,
    kind TEXT,
    method TEXT,
    external_reference_id TEXT,
    status TEXT,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp,
    PRIMARY KEY (id)
);

INSERT INTO payments (order_id, kind, method, external_reference_id, status, created_at, updated_at, deleted_at) VALUES (1, 'tarjeta','credito', '12', 'pagado', NOW(), null, null);