DROP DATABASE IF EXISTS rs_dev;

CREATE DATABASE rs_dev;

\c rs_dev;

CREATE TABLE history (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);