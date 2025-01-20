# **Naming**

## Naming Conventions

### React

- PascalCase: React Component and React Component Filename,
- UPPERCASE: constant, enum
- camelCase: variable, function, javascript Filename
- hyphens: URLs
- underscore: NONE

### SQL

- underscore and singular

`database_name`, `table_name`, `column_name`, `id`, `foreign_key_id`

## Synonym

### item/data

- pieces piece
- volumes volume
- units unit
- facts fact
- sets set

### Function name

- API
- Standard Restful API: getEntityById, getEntities, postEntity, patchEntity, deleteEntity
- Complex/Combined API: doEntity, performEntity

- Redux
- Standard: updateEntity(partial change), changeEntity(total replace), resetEntity
- Async: fetchEntityById, fetchEntities, pushEntity, removeEntity
- complex Action: saveEntity, loadEntity

- Used Verb: get, post, patch, delete, update, change, fetch, push, remove

### Others Options Word list

```
Get /set
Add /remove
Create /destroy
Start /stop
Open /close
Read /write
Load /save
begin/end
backup/ restore
import /export
split /merge
inject /extract
attach/detach
bind /separate
view/browse
edit /modify
select /mark
copy /paste
undo /redo
insert /delete
add /append
index /sort
find /search
increase /decrease
play /pause
launch /run
compile /execute
debug /trace
observe /listen
build /publish
input /output
encode /decode
encrypt /decrypt
compress /decompress
Pack /unpack
parse /emit
connect /disconnect
send/receive
download/upload
Refresh /synchronize
update /revert
lock /unlock

Submit /commit
push/pull
Expand /collapse
begin /end
start /finish
enter /exit
abort /quit
obsolete/depreciate
collect /aggregate
```

## Comment

Eg:

```js

- Descriptions ...
-
- @type {enumeration}
- @param {Boolean} para1
- @param {Array|Object} para2: The collection to iterate over.
- @param {Function} para3: The function invoked per iteration.
- @returns {Array} Returns the new mapped array.
- @since 1.0.0
- @example
-
- eg1: ...
  \*/
```

# **Syntax**

## SQL statements

### DQL Query

- Doctrine Query Language
- SELECT column FROM table WHERE condition

> _Select Oprations_

- MIN | MAX | COUNT | SUM | AVG
- DISTINCT
- AS

> _Where Conditions_

- AND | OR
- LIKE
- IN | NOT IN
- BETWEEN value1 AND value2
- EXISTS | ANY | ALL

> _Others_

- LIMIT OFFSET
- ORDER BY column1 ASC | DESC
- GROUP BY
- INNER JOIN | FUll JOIN | RIGHT JOIN | LEFT JOIN
- HAVING
- CASE

```sql
SELECT column1, column2 FROM table1 WHERE column1='value1'

SELECT MIN(column1) FROM table1
SELECT DISTINCT column1 FROM table1
SELECT column1 AS "column1Alias" FROM table1

SELECT * FROM table1 WHERE column1='value1' AND column2='value2'
SELECT * FROM table1 WHERE column1 LIKE '%A%'
SELECT * FROM table1 WHERE column1 IN ('value1', 'value2', 'value2')
SELECT * FROM table1 WHERE column1 BETWEEN 'value1' AND 'value2'

SELECT * FROM table1 LIMIT 20 OFFSET 40
SELECT * FROM table1 ORDER BY column1 DESC
SELECT MIN(column1), column2 FROM table1 GROUP BY column2
SELECT * FROM table1 INNER JOIN table2 ON table1.column1 = table2.column1
SELECT COUNT(customer_id), country FROM customers GROUP BY country HAVING COUNT(customer_id) > 5;
```

### Manipulation DML

- Data Manipulation Language
- make changes to the database, including CRUD

> _Manipulation Operations_

- INSERT INTO
- UPDATE SET WHERE
- DELETE

```sql
INSERT INTO table1 (column1, column2) VALUES ('value1', 'value2')
INSERT INTO table1 (column1, column2) VALUES ('value1', 'value2'), ('value3', 'value4')
UPDATE table1 SET column1 = 'value1', column2 = 'value2' WHERE column3 = 'value3'
DELETE FROM table1 WHERE column2 = 'value2'
```

### DDL Schema Definition

- DDL Data Definition Language
- create and modify the structure of objects

> _Database Operations_

- CREATE DATABASE
- DROP DATABASE
- BACKUP DATABASE database1 TO DISK

> _Table Operations_

- CREATE TABLE
- DROP TABLE
- ALTER TABLE
- ADD
- DROP COLUMN
- RENAME COLUMN old_name to new_name;
- MODIFY COLUMN

> _Constraints_

- NOT NULL | UNIQUE | PRIMARY KEY | AUTO_INCREMENT
- FOREIGN KEY
- CHECK
- DEFAULT

> _Others_

- CREATE INDEX

```sql
CREATE DATABASE database1
DROP DATABASE database1
BACKUP DATABASE database1 TO DISK = 'filepath'

CREATE TABLE Table1 ( column1 int,  column2 varchar(255) )
DROP TABLE table1
ALTER TABLE table1 ADD column1 varchar(255)
ALTER TABLE table1 DROP COLUMN column1
ALTER TABLE table1 RENAME COLUMN column1 to column2
ALTER TABLE table1 MODIFY COLUMN column1 varchar(255)


CREATE TABLE table1 ( Age int, CHECK (Age>=18) )
CREATE TABLE Persons (  City varchar(255) DEFAULT 'Sandnes' )


CREATE INDEX
```

### TCL Transaction Control Language

- COMMIT
- ROLLBACK
- SAVEPOINT

```
COMMIT: Commit command is used to permanently save any transaction into the database.
ROLLBACK: This command restores the database to last committed state. It is also used with savepoint command to jump to a savepoint in a transaction.
SAVEPOINT: Savepoint command is used to temporarily save a transaction so that you can rollback to that point whenever necessary.
```

### DCL (Data Control Language)

- GRANT
- REVOKE

```
GRANT: allow specified users to perform specified tasks.
REVOKE: cancel previously granted or denied permissions.
```

## Nodejs

### ChildProcess

- child_process.exec()
- child_process.execFile()
- child_process.fork()
- child_process.execSync()
- child_process.execFileSync()

```js
const { exec } = require('node:child_process');
```

### EventLoop

- process.nextTick()
- setImmediate()
- setTimeout()


```
     ┌───────────────────────────┐
  ┌─>│           poll            │ ---> synchronous Code
  │  └─────────────┬─────────────┘
  │           nextTickQueue        ---> process.nextTick, promise
  │  ┌─────────────┴─────────────┐
  │  │           check           │ ---> setImmediate
  │  └─────────────┬─────────────┘
  │           nextTickQueue
  │  ┌─────────────┴─────────────┐
  │  │       close callbacks     │
  │  └─────────────┬─────────────┘
  |           nextTickQueue
  │  ┌─────────────┴─────────────┐
  │  │           timers          │ ---> setTimeout
  │  └─────────────┬─────────────┘
  │           nextTickQueue
  │  ┌─────────────┴─────────────┐
  │  │     pending callbacks     │
  │  └─────────────┬─────────────┘
  │           nextTickQueue
  │  ┌─────────────┴─────────────┐
  └──┤        idle, prepare      │
     └───────────────────────────┘
```

## CSS Statement

### Grid Display

- display: grid;

> _Container Property_

- grid-template-columns: auto auto auto auto;
- grid-template-rows: 80px 200px;
- justify-content: space-around;
- align-content: center;

> _Grid Property_

- grid-column: 1 / span 3;
- grid-row: 1 / span 2;
- grid-area: 1 / 1 / span 2 / span 3;
