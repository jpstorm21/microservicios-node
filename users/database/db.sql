CREATE DATABASE users_service;

CREATE TABLE IF NOT EXISTS users(
    id SERIAL,
    username TEXT,
    email TEXT,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp,
    PRIMARY KEY (id)
);

INSERT INTO users (username, email, created_at, updated_at, deleted_at) VALUES ('juan-pablo', 'juanpmar@gmail.com', NOW(), null, null);