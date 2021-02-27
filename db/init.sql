

-- Adminer 4.8.0 PostgreSQL 13.2 (Debian 13.2-1.pgdg100+1) dump


\connect "userinfo";


CREATE SEQUENCE userdata_uid_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."userdata" (
    "uid" bigint DEFAULT nextval('userdata_uid_seq') NOT NULL,
    "Username" character(64) NOT NULL,
    "password" character(64) NOT NULL,
    CONSTRAINT "userdata_pkey" PRIMARY KEY ("uid")
) WITH (oids = false);

INSERT INTO "userdata" ("uid", "Username", "password") VALUES
(1,	'anjali                                                          ',	'njit                                                            '),
(2,	'test                                                            ',	'ak2254                                                          ');

-- 2021-02-27 08:12:35.859314+00-- 2021-02-26 20:43:12.482952+00
