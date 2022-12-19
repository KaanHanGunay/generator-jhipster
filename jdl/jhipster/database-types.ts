/**
 * Copyright 2013-2022 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const SQL = 'sql';
const MYSQL = 'mysql';
const MARIADB = 'mariadb';
const POSTGRESQL = 'postgresql';
const MSSQL = 'mssql';
const ORACLE = 'oracle';
const MONGODB = 'mongodb';
const CASSANDRA = 'cassandra';
const COUCHBASE = 'couchbase';
const NEO4J = 'neo4j';
const H2_DISK = 'h2Disk';
const H2_MEMORY = 'h2Memory';
const NO = 'no';

const isSql = type => [SQL, MYSQL, POSTGRESQL, ORACLE, MARIADB, MSSQL, H2_DISK, H2_MEMORY].includes(type);

export default {
  SQL,
  MYSQL,
  MARIADB,
  POSTGRESQL,
  MSSQL,
  ORACLE,
  MONGODB,
  CASSANDRA,
  COUCHBASE,
  NEO4J,
  H2_DISK,
  H2_MEMORY,
  NO,
  isSql,
};
