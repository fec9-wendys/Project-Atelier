DROP DATABASE IF EXISTS qaDB;

CREATE DATABASE qaDB;

USE qaDB;


CREATE TABLE product (
  product_id varchar(10) unique primary key,
  results: questions[]

);
CREATE TYPE questions (
  question_id integer unique primary key,
  question_body text,
  question_data date,
  asker_name varchar(60),
  question_helpfullness integer default 0,
  reported boolean default 0,
  answers answers[];
);

CREATE TYPE answers (
  answer_id integer unique primary key,
  body text,
  date date,
  answerer_name: varchar(50);
  helpfullness integer default 0;
  reported boolean default 0,
  photos photos[];

);

CREATE TYPE photos (
  id integer unique primary key,
  url text
)





