-- db_build.sql

BEGIN;

DROP TABLE IF EXISTS users, shop, basket CASCADE;

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  username varchar,
  kitty integer DEFAULT 16,
  password varchar
);

INSERT INTO users (username) VALUES ('Ana');
INSERT INTO users (username, kitty) VALUES ('Elsa', 80);
INSERT INTO users (username, kitty, password) VALUES ('Olaf', 16, 'password');

CREATE TABLE IF NOT EXISTS shop (
  fruit_id SERIAL PRIMARY KEY,
  fruit_name varchar,
  fruit_stock int,
  fruit_price decimal(10, 2)
);


INSERT INTO shop(fruit_name, fruit_stock, fruit_price) VALUES ('Apple', 100, 1.29), 
('Watermelon', 100, 3.50),
('Mango', 100, 1.29),
('Banana', 100, 0.99),
('Clementine', 100, 1.69),
('Pear', 100, 1.49),
('Pomelo', 100, 1.50),
('Kiwi', 100, 1.99),
('Mangosteen', 100, 5.99),
('Dragon fruit', 100, 4.99),
('Tomato', 100, 0.89);

CREATE TABLE IF NOT EXISTS basket (
  basket_id SERIAL PRIMARY KEY,
  fruit_id int,
  fruit_price int,
  purchase_quantity int,
  purchase_amount decimal(10, 2)
);

-- ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "basket" ("id");
-- ALTER TABLE "users" ADD FOREIGN KEY ("name") REFERENCES "shop" ("id");

COMMIT;