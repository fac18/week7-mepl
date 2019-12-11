-- db_build.sql

BEGIN;

DROP TABLE IF EXISTS users, shop, basket CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar,
  kitty integer DEFAULT 16
);

INSERT INTO users (name) VALUES ('Ana');
INSERT INTO users (name, kitty) VALUES ('Elsa', 80);

CREATE TABLE IF NOT EXISTS shop (
  id SERIAL PRIMARY KEY,
  fruit varchar,
  stock int,
  price integer
);

INSERT INTO shop (fruit, stock, price) VALUES ('Apples 6 pack', 100, 1.29);
INSERT INTO shop (fruit, stock, price) VALUES ('Watermelon', 100, 3.50);
INSERT INTO shop (fruit, stock, price) VALUES ('Mangoes x 2', 100, 1.29);
INSERT INTO shop (fruit, stock, price) VALUES ('Bananas x 5', 100, 0.99);
INSERT INTO shop (fruit, stock, price) VALUES ('Clementines multipack', 100, 1.69);
INSERT INTO shop (fruit, stock, price) VALUES ('Pears 6 pack', 100, 1.49);
INSERT INTO shop (fruit, stock, price) VALUES ('Pomelo', 100, 1.50);
INSERT INTO shop (fruit, stock, price) VALUES ('Kiwis 6 pack', 100, 1.99);
INSERT INTO shop (fruit, stock, price) VALUES ('Mangsteen 6 pack', 100, 5.99);
INSERT INTO shop (fruit, stock, price) VALUES ('Dragon fruit 2 pack', 100, 4.99);
INSERT INTO shop (fruit, stock, price) VALUES ('Tomatoes 6 pack', 100, 0.89);

CREATE TABLE IF NOT EXISTS basket (
  id SERIAL PRIMARY KEY,
  fruit_id int,
  stock int
);

-- ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "basket" ("id");
-- ALTER TABLE "users" ADD FOREIGN KEY ("name") REFERENCES "shop" ("id");

COMMIT;