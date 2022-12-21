DROP DATABASE IF EXISTS productsDB;

CREATE DATABASE productsDB;

USE productsDB;

CREATE TYPE afeature AS (
    feature text,
    aValue text
);
CREATE TABLE product (
    id serial primary key,
    aName text,
    slogan text,
    aDescription text,
    category text,
    default_price text,
    features afeature[]
);

CREATE TYPE athing AS (
    quantity integer,
    size text
);
CREATE TYPE asku AS (
    serial athing
);
CREATE TYPE aphoto AS (
    thumbail_url text,
    aUrl text
);
CREATE TYPE aresult AS (
    style_id serial,
    aName text,
    original_price text,
    sale_price text,
    aDefault boolean,
    photos aphoto []
    skus asku
);
CREATE TABLE styles (
    product_id serial primary key,
    results aresult[]
);
CREATE TABLE related (
    int_array integer []
);
