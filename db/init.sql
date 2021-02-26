

-- Adminer 4.8.0 PostgreSQL 13.2 (Debian 13.2-1.pgdg100+1) dump


\connect "userinfo";


CREATE TABLE "public"."userdata" (
"Username" character(64) NOT NULL,
"password" character(64) NOT NULL
) WITH (oids = false);

INSERT INTO "userdata" ("Username", "password") VALUES
('anjali                                                          ',	'njit                                                            '),
('test                                                            ',	'ak2254                                                          ');

-- 2021-02-26 20:43:12.482952+00
